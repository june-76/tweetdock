import Tweet from "./tweet";
import { ITweet } from "./layout";
import { styled } from "styled-components";

const TweetWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: whitesmoke;
    padding: 10px;
    border-radius: 10px;
    gap: 10px;
    min-width: 250px;
    max-width: 300px;
`;

const TweetHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`;

const SearchQueryText = styled.div`
    font-weight: bold;
    margin-bottom: 10px;
`;

const DeleteButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    color: #666;
    padding: 4px 8px;
    border-radius: 50%;

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
        color: #ff6b6b;
    }
`;

interface Props {
    tweets: ITweet[];
    hasSearched?: boolean;
    searchQuery?: string; // 검색어 표시를 위해 추가
    onDelete?: () => void; // 삭제 함수 prop 추가
}

const ResultTweet = ({
    tweets,
    hasSearched = false,
    searchQuery,
    onDelete,
}: Props) => {
    return (
        <TweetWrapper>
            <TweetHeader>
                {searchQuery && (
                    <SearchQueryText>"{searchQuery}" 검색 결과</SearchQueryText>
                )}
                <DeleteButton onClick={onDelete}>✕</DeleteButton>
            </TweetHeader>
            {tweets.length > 0
                ? tweets.map((tweet) => (
                      <Tweet key={tweet.id} {...tweet} /> // 기존 Tweet 컴포넌트 재사용
                  ))
                : hasSearched && <div>검색 결과가 없습니다.</div>}
        </TweetWrapper>
    );
};

export default ResultTweet;
