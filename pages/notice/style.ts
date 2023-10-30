import styled, { css } from "styled-components";
export const Container = styled.main`
  width: 90vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 2.6rem;
  grid-template-columns: repeat(2, 1fr);
`;

export const NoticeContainer = styled.div`
  padding: 2rem;
  display: flex;
  gap: 1.6rem;
  cursor: pointer;
  background-color: #fff;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 2rem;
  font-weight: 700;
  line-height: 120%;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;
