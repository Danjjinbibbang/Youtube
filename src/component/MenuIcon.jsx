import { BiVideoPlus } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import styled from "styled-components";

const MenuIcon = () => {
  const handleMenuClick = () => {
    // 메뉴 아이콘 클릭 시 동작 구현
    console.log("메뉴 아이콘 클릭");
  };

  return (
    <Container onClick={handleMenuClick}>
      <MenuSize>
        <BiVideoPlus size={30} />
      </MenuSize>
      <MenuSize>
        <BsBell size={30} />
      </MenuSize>
      <MenuSize>
        <CgProfile size={30} />
      </MenuSize>
    </Container>
  );
};

export default MenuIcon;

const Container = styled.div`
  display: flex;
  width: 10%;
  padding: 0;
  gap: 1rem;
  align-items: center;
`;

const MenuSize = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
