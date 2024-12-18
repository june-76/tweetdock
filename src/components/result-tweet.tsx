import { ITweet } from "./layout";
import { styled } from "styled-components";

const TweetWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

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

interface Props {
    tweets: ITweet[];
}

const ResultTweet = ({ tweets }: Props) => {
    return (
        <TweetWrapper>
            {tweets.length > 0 ? (
                tweets.map((tweet) => (
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
            ) : (
                <div></div>
                // <div>검색 결과가 없습니다.</div>
            )}
        </TweetWrapper>
    );
};

export default ResultTweet;
