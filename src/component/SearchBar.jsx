import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardVoice } from "react-icons/md";
import styled from "styled-components";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // 검색 기능 구현 -> api 연동
    console.log("검색어:", searchTerm);
  };

  return (
    <SearchContainer>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInnerContainer>
          <Input
            type="text"
            placeholder="검색"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <Button type="submit">
            <CiSearch />
          </Button>
        </SearchInnerContainer>
        <StyledVoice />
      </SearchForm>
    </SearchContainer>
  );
};

export default SearchBar;

const SearchContainer = styled.div`
  display: flex;
  min-width: 0;
`;

const SearchForm = styled.form`
  display: flex;
  flex: 0 1 732px;
  padding: 2px;
  align-items: center;
  gap: 1rem;
`;

const SearchInnerContainer = styled.div`
  display: flex;
  border: 1px solid #ccc;
  padding: 2px;
  border-radius: 30px;
  align-items: center;
  width: 30rem;
  height: 2.3rem;
`;

const Input = styled.input`
  border: none;
  border-radius: 20px;
  font-size: 16px;
  padding: 5px;
  outline: none;
  width: 27rem;
`;

const Button = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-right: 10px;
`;

const StyledVoice = styled(MdKeyboardVoice)`
 background-color: #ccc;
 border-radius: 50px;
 font-size: 30px;
`;
