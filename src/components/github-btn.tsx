import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { styled } from "styled-components";
import { auth } from "../routes/firebase";
import { useNavigate } from "react-router-dom";

const Button = styled.span`
    margin-top: 50px;
    background-color: white;
    font-weight: 500;
    width: 100%;
    color: black;
    padding: 10px 20px;
    border-radius: 50px;
    border: 0;
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
        color: #ffffff;
        background-color: #ffe863;
    }
`;

const Logo = styled.img`
    height: 25px;
`;

export default function GoogleButton() {
    const navigate = useNavigate();
    const onClick = async () => {
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <Button onClick={onClick}>
            <Logo src="/github-mark.png" />
            Continue with Google
        </Button>
    );
}
