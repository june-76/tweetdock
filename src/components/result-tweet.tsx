import { ITweet } from "./layout";
import { styled } from "styled-components";

const TweetWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

// const TweetWrapper = styled.div`
//     display: flex;
//     flex-direction: column;
//     gap: 15px;
//     min-width: 250px;
//     max-width: 300px;
//     background: white;
//     border-radius: 10px;
//     padding: 15px;
//     box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
// `;

const TweetItem = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    gap: 8px;
`;

const TweetContent = styled.div`
    font-size: 14px;
`;

const TweetUser = styled.div`
    font-weight: bold;
`;

const TweetPhoto = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

const SearchQueryText = styled.div`
    font-weight: bold;
    margin-bottom: 10px;
`;

interface Props {
    tweets: ITweet[];
    hasSearched?: boolean;
    searchQuery?: string; // 검색어 표시를 위해 추가
}

const ResultTweet = ({ tweets, hasSearched = false, searchQuery }: Props) => {
    return (
        <TweetWrapper>
            {/* 검색어 표시 */}
            {searchQuery && (
                <SearchQueryText>"{searchQuery}" 검색 결과</SearchQueryText>
            )}

            {tweets.length > 0
                ? tweets.map((tweet) => (
                      <TweetItem key={tweet.id}>
                          {tweet.photo && (
                              <TweetPhoto
                                  src={tweet.photo}
                                  alt={tweet.username}
                              />
                          )}
                          <TweetUser>{tweet.username}</TweetUser>
                          <TweetContent>{tweet.tweet}</TweetContent>
                      </TweetItem>
                  ))
                : hasSearched && <div>검색 결과가 없습니다.</div>}
        </TweetWrapper>
    );
};

export default ResultTweet;
