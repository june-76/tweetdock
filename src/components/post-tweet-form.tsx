import { addDoc, collection, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { styled } from "styled-components";
import { auth, db, storage } from "../routes/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const TextArea = styled.textarea`
    border: 3px solid white;
    padding: 20px;
    border-radius: 20px;
    font-size: 16px;
    color: black;
    background-color: white;
    width: 100%;
    resize: none;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
        sans-serif;
    &::placeholder {
        opacity: 0.6;
        font-size: 16px;
    }
    &:focus {
        outline: none;
        border-color: #ffe863;
    }
`;

const AttachFileButton = styled.label`
    padding: 10px 0px;
    color: #ffe863;
    text-align: center;
    border-radius: 20px;
    border: 1px solid #ffe863;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    &:hover,
    &:active {
        opacity: 0.8;
    }
`;

const AttachFileInput = styled.input`
    display: none;
`;

const SubmitBtn = styled.input`
    background-color: #ffe863;
    color: #1d9bf0;
    border: none;
    padding: 10px 0px;
    border-radius: 20px;
    font-size: 16px;
    cursor: pointer;
    &:hover,
    &:active {
        opacity: 0.8;
    }
`;

export default function PostTweetForm() {
    const [isLoading, setLoading] = useState(false);

    const [tweet, setTweet] = useState("");

    const [file, setFile] = useState<File | null>(null);

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTweet(e.target.value);
    };

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;

        if (files && files.length === 1) {
            const file = files[0];

            // 파일 형식 체크
            // jpg, png, gif 파일만 업로드 가능
            const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
            if (!allowedTypes.includes(file.type)) {
                alert("Only JPG, PNG, and GIF files are allowed.");
                return;
            }

            // 파일 크기 체크
            // 10MB 미만의 파일만 업로드 가능
            const maxSizeInBytes = 10 * 1024 * 1024;
            if (file.size > maxSizeInBytes) {
                alert("File size must be less than 10MB.");
                return;
            }

            setFile(file);
        }
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user = auth.currentUser;

        if (!user || isLoading || tweet === "" || tweet.length > 180) return;

        try {
            setLoading(true);

            const doc = await addDoc(collection(db, "tweets"), {
                tweet,
                createdAt: Date.now(),
                username: user.displayName || "Anonymous",
                userId: user.uid,
                photo: null, // 초기값으로 photo 필드를 추가
            });

            if (file) {
                const locationRef = ref(
                    storage,
                    `tweets/${user.uid}/${doc.id}`
                );

                const result = await uploadBytes(locationRef, file);
                const url = await getDownloadURL(result.ref);

                await updateDoc(doc, {
                    photo: url,
                });
            }

            setTweet("");
            setFile(null);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Form onSubmit={onSubmit}>
            <TextArea
                required
                rows={5}
                maxLength={140}
                onChange={onChange}
                value={tweet}
                placeholder="What is happening?!"
            />
            <AttachFileButton htmlFor="file">
                {file ? "사진 추가됨 ✅" : "사진 추가"}
            </AttachFileButton>
            {/* label click */}
            <AttachFileInput
                onChange={onFileChange}
                type="file"
                id="file"
                accept="image/*"
            />
            <SubmitBtn
                type="submit"
                value={isLoading ? "작성중..." : "작성 완료"}
            />
        </Form>
    );
}
