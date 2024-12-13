import { useState } from "react";
import styled from "styled-components";
import { ITweet } from "./timeline";
import { auth, db, storage } from "../routes/firebase";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    padding: 20px;
    margin-bottom: 10px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 15px;
    background-color: #00aaff;
`;

const Column = styled.div`
    &:last-child {
        place-self: end;
    }
`;

const Photo = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 15px;
`;

const Username = styled.span`
    font-weight: 600;
    font-size: 16px;
`;

const Payload = styled.p`
    margin: 6px 0px;
    font-size: 16px;
`;

const EditablePayload = styled.div`
    margin: 6px 0px;
    font-size: 16px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    padding: 6px;
    min-height: 20px;
    background-color: white;
    color: black;
    &:focus {
        outline: 2px solid #ffe863;
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
`;

const DeleteButton = styled.button`
    background-color: #ffe863;
    color: gray;
    font-weight: 300;
    border: 0;
    font-size: 12px;
    padding: 5px 10px;
    text-transform: uppercase;
    border-radius: 5px;
    cursor: pointer;
`;

export default function Tweet({ username, photo, tweet, userId, id }: ITweet) {
    const user = auth.currentUser;
    const [isEditing, setIsEditing] = useState(false);
    const [editedTweet, setEditedTweet] = useState(tweet);

    const onDelete = async () => {
        const ok = confirm("Are you sure you want to delete this tweet?");

        if (!ok || user?.uid !== userId) return;

        try {
            await deleteDoc(doc(db, "tweets", id));

            if (photo) {
                const photoRef = ref(storage, `tweets/${user.uid}/${id}`);

                await deleteObject(photoRef);
            }
        } catch (e) {
            console.log(e);
        }
    };

    const onSave = async () => {
        if (editedTweet.trim() === "") return alert("Tweet cannot be empty!");

        try {
            await updateDoc(doc(db, "tweets", id), {
                tweet: editedTweet,
            });
            setIsEditing(false);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <Wrapper>
            <Column>
                <Username>{username}</Username>
                {isEditing ? (
                    <EditablePayload
                        contentEditable
                        suppressContentEditableWarning
                        onInput={(e) =>
                            setEditedTweet(e.currentTarget.textContent || "")
                        }
                    >
                        {editedTweet}
                    </EditablePayload>
                ) : (
                    <Payload>{tweet}</Payload>
                )}
                <ButtonGroup>
                    {user?.uid === userId && (
                        <>
                            {!isEditing ? (
                                <DeleteButton
                                    onClick={() => setIsEditing(true)}
                                >
                                    Edit
                                </DeleteButton>
                            ) : (
                                <DeleteButton
                                    onClick={() => setIsEditing(false)}
                                >
                                    Cancel
                                </DeleteButton>
                            )}
                            {isEditing && (
                                <DeleteButton onClick={onSave}>
                                    Save
                                </DeleteButton>
                            )}
                            <DeleteButton onClick={onDelete}>
                                Delete
                            </DeleteButton>
                        </>
                    )}
                </ButtonGroup>
            </Column>
            <Column>{photo ? <Photo src={photo} /> : null}</Column>
        </Wrapper>
    );
}
