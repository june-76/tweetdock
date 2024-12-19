import { Link, Outlet, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { auth } from "../routes/firebase";
import {
    getFirestore,
    collection,
    query,
    getDocs,
    orderBy,
    startAt,
    endAt,
} from "firebase/firestore";
import { useState } from "react";
import ResultTweet from "./result-tweet"; // result-tweet.tsx import

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
    grid-template-columns: 1fr 4fr 3fr;
    height: 100%;
    padding: 80px 0px;
    width: 100%;
    max-width: 1200px;
    position: relative;
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

const SearchContainer = styled.div`
    position: absolute;
    top: 24px;
    right: 2px;
    display: flex;
    align-items: center;
    gap: 10px;
`;

const SearchResultsContainer = styled.div`
    display: flex;
    flex-direction: row; // 가로 방향 정렬
    gap: 15px; // 검색 결과들 사이의 간격
    overflow-x: auto; // 가로 스크롤 허용
    padding: 10px; // 여백 추가
`;

const SearchInput = styled.input<{ disabled?: boolean }>`
    padding: 8px;
    font-size: 14px;
    border-radius: 5px;
    border: 1px solid #ddd;
    outline: none;
    width: 240px;
    opacity: ${(props) => (props.disabled ? 0.5 : 1)};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "text")};
`;

const SearchBtn = styled.div<{ disabled?: boolean }>`
    cursor: pointer;
    border: 3px solid white;
    height: 36px;
    width: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
        width: 32px;
        fill: white;
    }
    ${(props) =>
        !props.disabled &&
        `
    &:hover {
        border-color: #ffe863;
        svg {
            fill: #ffe863;
        }
    `}
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    border: 3px solid ${(props) => (props.disabled ? "#ccc" : "white")};
    opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

interface SearchResult {
    query: string; // 검색어
    tweets: ITweet[]; // 검색 결과
    hasSearched: boolean; // 검색 여부
}

export default function Layout() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState(""); // 검색어 상태
    const [searchResults, setSearchResults] = useState<SearchResult[]>([]); // 검색 결과들을 배열로 관리

    const isSearchDisabled = searchResults.length >= 3; // 검색 결과가 3개 이상인 지 확인

    // 파이어스토어에서 검색어에 해당하는 데이터 찾기
    const searchInFirestore = async (queryText: string) => {
        const db = getFirestore();
        const collectionRef = collection(db, "tweets");
        const q = query(
            collectionRef,
            orderBy("tweet"),
            startAt(queryText),
            endAt(queryText + "\uf8ff")
        );

        const querySnapshot = await getDocs(q);
        const results: ITweet[] = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            tweet: doc.data().tweet,
            userId: doc.data().userId,
            username: doc.data().username,
            photo: doc.data().photo,
            createdAt: doc.data().createdAt,
        }));

        // 새로운 검색 결과를 배열에 추가 (최대 3개까지)
        setSearchResults((prev) => {
            const newResult = {
                query: queryText,
                tweets: results,
                hasSearched: true,
            };

            // 이미 3개가 있다면 가장 오래된 것을 제거하고 새것을 추가
            if (prev.length >= 3) {
                return [...prev.slice(1), newResult];
            }
            // 3개 미만이면 그냥 추가
            return [...prev, newResult];
        });

        // 검색 완료 후 검색어 초기화
        setSearchQuery("");
    };

    // 검색어 입력 핸들러 (검색 요청을 위한 상태 업데이트만)
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value); // 검색어 상태 업데이트
    };

    // 돋보기 버튼 클릭 시 검색 실행
    const handleSearch = () => {
        if (searchQuery.length > 0 && !isSearchDisabled) {
            // 최소 1글자 이상일 때만 검색
            searchInFirestore(searchQuery); // Firestore 쿼리 실행
        }
    };

    // Enter 키를 눌렀을 때 검색 실행
    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && searchQuery.length > 0 && !isSearchDisabled) {
            searchInFirestore(searchQuery); // Firestore 쿼리 실행
        }
    };

    const onLogOut = async () => {
        const ok = confirm("로그아웃하시겠습니까?");
        if (ok) {
            await auth.signOut();
            navigate("/login");
        }
    };

    // 검색 결과 삭제 함수
    const handleDeleteResult = (index: number) => {
        setSearchResults((prev) => prev.filter((_, i) => i !== index));
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
            <SearchContainer>
                <SearchInput
                    type="text"
                    placeholder={
                        isSearchDisabled
                            ? "최대 타임라인 수에 도달했습니다."
                            : "검색"
                    }
                    value={searchQuery}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress} // Enter 키 이벤트 처리
                    disabled={isSearchDisabled}
                />
                <SearchBtn onClick={handleSearch} disabled={isSearchDisabled}>
                    {" "}
                    {/* 돋보기 버튼 클릭 시 검색 */}
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
            </SearchContainer>
            <Outlet />
            <SearchResultsContainer>
                {/* 검색 결과들을 순서대로 렌더링 */}
                {searchResults.map((result, index) => (
                    <ResultTweet
                        key={result.query + index}
                        tweets={result.tweets}
                        hasSearched={result.hasSearched}
                        searchQuery={result.query} // 검색어도 표시하기 위해 추가
                        onDelete={() => handleDeleteResult(index)} // 삭제 함수 전달
                    />
                ))}
            </SearchResultsContainer>
        </Wrapper>
    );
}
