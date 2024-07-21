import "./reset.css";
import styled from "styled-components";
import Header from "./component/Header.jsx";
import Sidebar from "./component/Sidebar.jsx";
import VideoList from "./component/VideoList.jsx";

function App() {
  return (
    <Container>
      <Header />
      <MainContainer>
        <Sidebar />
        <VideoList/>
      </MainContainer>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const MainContainer = styled.div`
 display: flex;
 width: 100%;
`;
