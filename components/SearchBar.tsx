import { Search } from "lucide-react";
import React from "react";
import styled from "styled-components";

function SearchBar() {
  return (
    <SearchBarWrapper>
      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <Search size={16} />
        <input placeholder="무엇을 찾고 계세요?"></input>
      </div>

      <Btn>검색</Btn>
    </SearchBarWrapper>
  );
}

export default SearchBar;

const SearchBarWrapper = styled.div`
  width: 100%;
  border: 2px solid #7184a7;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & input {
    width: 100%;
    color: ${(props) => props.theme.colors.text};
    background: transparent;
    border: none;
    font-size: 1.4rem;
  }
`;

const Btn = styled.button`
  padding: 2rem 3.4rem;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.secondary};
`;
