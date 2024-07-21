import styled from "styled-components";
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { TfiDownload } from "react-icons/tfi";

const Sidebar = () => {
  return (
    <OutContainer>
      <IconContainer>
        <HomeIcon />
        <IconTitle>홈</IconTitle>
      </IconContainer>

      <IconContainer>
        <ShortIcon />
        <IconTitle>Shorts</IconTitle>
      </IconContainer>

      <IconContainer>
        <Subscribe />
        <IconTitle>구독</IconTitle>
      </IconContainer>

      <IconContainer>
        <Music />
        <IconTitle>YouTube Music</IconTitle>
      </IconContainer>

      <IconContainer>
        <Play />
        <IconTitle>나</IconTitle>
      </IconContainer>

      <IconContainer>
        <Download />
        <IconTitle>오프라인 저장</IconTitle>
      </IconContainer>
    </OutContainer>
  );
};

export default Sidebar;

const OutContainer = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
`;

const IconContainer = styled.div`
  width: 5rem;
  height: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const IconTitle = styled.h1`
  font-size: 0.7rem;
  padding: 0;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
`;

const HomeIcon = styled(MdHomeFilled)`
  font-size: 30px;
`;

const ShortIcon = styled(SiYoutubeshorts)`
  font-size: 30px;
`;

const Subscribe = styled(MdOutlineSubscriptions)`
  font-size: 30px;
`;

const Music = styled(SiYoutubemusic)`
  font-size: 30px;
`;

const Play = styled(AiOutlinePlaySquare)`
  font-size: 30px;
`;

const Download = styled(TfiDownload)`
  font-size: 30px;
`;
