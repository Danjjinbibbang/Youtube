import { useEffect, useState } from "react";
import styled from "styled-components";
import VideoApi from "./VideoApi";
import { VscKebabVertical } from "react-icons/vsc";

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const axiosVideos = async () => {
      try {
        const data = await VideoApi();
        setVideos(data.items);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    axiosVideos();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Outer>
      {videos.map((data) => (
        <Container key={data.id}>
          <Wrapper>
            <Nail
              src={data.snippet.thumbnails.maxres.url}
              alt={data.snippet.title}
            />
          </Wrapper>
          <ContentContainer>
            <Profile>프로필</Profile>
            <ButtonLocation>
              <TitleContainer>
                <Title>{data.snippet.title}</Title>
                <Name>{data.snippet.channelTitle}</Name>
                <Info>
                  <Number>{data.statistics?.viewCount || "N/A"} views</Number>
                  <Time>
                    {new Date(data.snippet.publishedAt).toLocaleDateString()}
                  </Time>
                </Info>
              </TitleContainer>
              <Button>
                <VscKebabVertical />
              </Button>
            </ButtonLocation>
          </ContentContainer>
        </Container>
      ))}
    </Outer>
  );
};

export default VideoList;

const Outer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  gap: 20px 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
`;

const Wrapper = styled.div`
  width: 100%;
`;

const Nail = styled.img`
  border-radius: 10px;
  width: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  max-width: 100%;
  padding: 10px;
  gap: 0.4rem;
`;

const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Title = styled.h3``;

const Info = styled.div`
  display: flex;
`;
const Name = styled.h4`
  font-size: 0.8rem;
`;

const Number = styled.h4`
  font-size: 0.8rem;
`;

const Time = styled.h4`
  font-size: 0.8rem;
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
`;

const ButtonLocation = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
