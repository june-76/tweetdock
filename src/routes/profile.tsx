import { styled } from "styled-components";
import { auth, db, storage } from "../routes/firebase";
import { useEffect, useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { updateProfile } from "firebase/auth";
import {
    collection,
    onSnapshot,
    orderBy,
    query,
    where,
    limit,
} from "firebase/firestore";
import { ITweet } from "../components/timeline";
import Tweet from "../components/tweet";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
`;

const AvatarUpload = styled.label`
    width: 80px;
    overflow: hidden;
    height: 80px;
    border-radius: 50%;
    background-color: #00aaff;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
        width: 50px;
    }
    &:hover {
        opacity: 0.6;
    }
`;

const AvatarImg = styled.img`
    width: 100%;
`;

const AvatarInput = styled.input`
    display: none;
`;

const Name = styled.span`
    font-size: 22px;
`;

const Tweets = styled.div`
    display: flex;
    background-color: whitesmoke;
    padding: 10px;
    margin-bottom: 50px;
    border-radius: 10px;
    gap: 10px;
    flex-direction: column;
`;

const NameWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const NameInput = styled.input`
    font-size: 18px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 160px;
`;

const SaveButton = styled.button`
    padding: 5px 10px;
    background-color: #ffcc00;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px;
    &:hover {
        opacity: 0.8;
    }
`;

const EditButton = styled.button`
    padding: 5px 10px;
    background-color: #ffcc00;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px;
    &:hover {
        opacity: 0.8;
    }
`;

export default function Profile() {
    const user = auth.currentUser;

    const [avatar, setAvatar] = useState(user?.photoURL);
    const [name, setName] = useState(user?.displayName ?? "");
    const [isEditing, setIsEditing] = useState(false); // 수정 상태 여부
    const [tweets, setTweets] = useState<ITweet[]>([]);

    const onAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;

        if (!user) return;

        if (files && files.length === 1) {
            const file = files[0];

            const locationRef = ref(storage, `avatars/${user?.uid}`);

            const result = await uploadBytes(locationRef, file);

            const avatarUrl = await getDownloadURL(result.ref);

            setAvatar(avatarUrl);

            await updateProfile(user, {
                photoURL: avatarUrl,
            });
        }
    };

    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const onSaveName = async () => {
        if (user && name !== user.displayName) {
            await updateProfile(user, {
                displayName: name,
            });

            // 토스트 알림 띄우기
            toast.success("이름이 저장되었습니다!"); // 성공적인 저장 후 알림
        }

        // 수정 상태 종료
        setIsEditing(false);
    };

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    useEffect(() => {
        const tweetQuery = query(
            collection(db, "tweets"),
            where("userId", "==", user?.uid),
            orderBy("createdAt", "desc"),
            limit(10)
        );

        const unsubscribe = onSnapshot(tweetQuery, (snapshot) => {
            const tweets = snapshot.docs.map((doc) => {
                const { tweet, createdAt, userId, username, photo } =
                    doc.data();

                return {
                    tweet,
                    createdAt,
                    userId,
                    username,
                    photo,
                    id: doc.id,
                };
            });

            setTweets(tweets);
        });

        return () => unsubscribe();
    }, []);

    return (
        <Wrapper>
            <AvatarUpload htmlFor="avatar">
                {avatar ? (
                    <AvatarImg src={avatar} />
                ) : (
                    <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                    </svg>
                )}
            </AvatarUpload>
            <AvatarInput
                onChange={onAvatarChange}
                id="avatar"
                type="file"
                accept="image/*"
            />
            <NameWrapper>
                {isEditing ? (
                    <NameInput
                        type="text"
                        value={name}
                        onChange={onNameChange}
                        placeholder="Enter your name"
                    />
                ) : (
                    <Name>{name}</Name>
                )}
                {isEditing ? (
                    <SaveButton onClick={onSaveName}>Save</SaveButton>
                ) : (
                    <EditButton onClick={toggleEdit}>Edit</EditButton>
                )}
            </NameWrapper>
            <Tweets>
                {tweets.map((tweet) => (
                    <Tweet key={tweet.id} {...tweet} />
                ))}
            </Tweets>
            {/* ToastContainer 추가 */}
            <ToastContainer />
        </Wrapper>
    );
}
