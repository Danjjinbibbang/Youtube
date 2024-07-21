//import React from "react";
import styled from "styled-components";
import MenuIcon from "./MenuIcon";
import SearchBar from "./SearchBar";
import youtube_logo from "../assets/youtube_logo.png";
import { RiMenuLine } from "react-icons/ri";

const Header = () => {
  return (
    <HeaderContainer>
      <LeftContainer>
        <SideMenu>
          <RiMenuLine size={30} />
        </SideMenu>
        <Logo src={youtube_logo} alt="Youtube Logo"></Logo>
      </LeftContainer>
      <SearchBar />
      <MenuIcon />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 56px;
  padding: 0 16px;
  justify-content: space-between;
  align-items: center;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SideMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
`;

const Logo = styled.img`
  width: 10rem;
`;
