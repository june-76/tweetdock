import { Link, Outlet, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { auth } from "../routes/firebase";
import {
    getFirestore,
    collection,
    query,
    where,
    getDocs,
    orderBy,
    startAt,
    endAt,
} from "firebase/firestore";
import { useState } from "react";

export interface ITweet {
    id: string;
    photo?: string;
    tweet: string;
    userId: string;
    username: string;
    createdAt: number;
}

const Wrapper = styled.div`
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 4fr;
    height: 100%;
    padding: 80px 0px;
    width: 100%;
    max-width: 860px;
    position: relative; /* Wrapper 내에서 절대 위치 설정 가능 */
`;

const Menu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

const MenuItem = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid white;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    svg {
        width: 32px;
        fill: white;
    }
    &:hover {
        border-color: #ffe863;
        svg {
            fill: #ffe863;
        }
    }
`;

const SearchBtn = styled.div`
    position: absolute; /* Wrapper 내에서 절대 위치 */
    top: 20px; /* Outlet 상단에서 떨어진 위치 */
    right: 2px; /* Outlet 우측에서 떨어진 위치 */
    cursor: pointer;
    border: 3px solid white;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
        width: 32px;
        fill: white;
    }
    &:hover {
        border-color: #ffe863;
        svg {
            fill: #ffe863;
        }
    }
`;

const SearchInput = styled.input`
    position: absolute;
    top: 20px;
    right: 50px;
    padding: 8px;
    font-size: 14px;
    border-radius: 5px;
    border: 1px solid #ddd;
    outline: none;
    width: 200px;
`;

export default function Layout() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState(""); // 검색어 상태
    const [searchResults, setSearchResults] = useState<ITweet[]>([]); // 검색 결과 상태

    // 파이어스토어에서 검색어에 해당하는 데이터 찾기
    const searchInFirestore = async (queryText: string) => {
        const db = getFirestore();
        const collectionRef = collection(db, "tweets");
        // const q = query(collectionRef, where("tweet", "==", queryText));
        const q = query(
            collectionRef,
            orderBy("tweet"),
            startAt(queryText),
            endAt(queryText + "\uf8ff")
        );

        const querySnapshot = await getDocs(q);
        const results: ITweet[] = querySnapshot.docs.map((doc) => {
            const data = doc.data();
            return {
                id: doc.id,
                tweet: data.tweet,
                userId: data.userId,
                username: data.username,
                photo: data.photo,
                createdAt: data.createdAt,
            };
        });
        console.log(results); // 검색 결과 콘솔에 출력
        setSearchResults(results); // 검색 결과 상태에 데이터 설정
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchQuery(value); // 검색어 상태 업데이트
        if (value.length > 2) {
            // 최소 3글자 이상일 때만 검색
            searchInFirestore(value); // Firestore 쿼리 실행
        }
    };

    const onLogOut = async () => {
        const ok = confirm("로그아웃하시겠습니까?");
        if (ok) {
            await auth.signOut();
            navigate("/login");
        }
    };

    return (
        <Wrapper>
            <Menu>
                <Link to="/">
                    <MenuItem>
                        <svg
                            width="100"
                            height="100"
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path d="M10 70 Q50 100 90 70 Z" />
                            <rect x="48" y="20" width="4" height="50" />
                            <path d="M50 10 L20 50 L50 50 Z" />
                            <path d="M50 10 L50 50 L80 50 Z" />
                        </svg>
                    </MenuItem>
                </Link>
                <Link to="/profile">
                    <MenuItem>
                        <svg
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                        </svg>
                    </MenuItem>
                </Link>
                <MenuItem onClick={onLogOut} className="log-out">
                    <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path
                            clipRule="evenodd"
                            fillRule="evenodd"
                            d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"
                        />
                        <path
                            clipRule="evenodd"
                            fillRule="evenodd"
                            d="M19 10a.75.75 0 00-.75-.75H8.704l1.048-.943a.75.75 0 00-1.004-1.114l-2.5 2.25a.75.75 0 000 1.114l2.5 2.25a.75.75 0 101.004-1.114l-1.048-.943h9.546A.75.75 0 0019 10z"
                        />
                    </svg>
                </MenuItem>
            </Menu>
            <SearchInput
                type="text"
                placeholder="검색어 입력"
                value={searchQuery}
                onChange={handleInputChange}
            />
            <SearchBtn>
                <svg
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <circle cx="40" cy="40" r="24" />
                    <rect
                        x="60"
                        y="50"
                        width="26"
                        height="10"
                        transform="rotate(45 50 50)"
                    />
                </svg>
            </SearchBtn>
            <Outlet />
        </Wrapper>
    );
}
