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
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 2.7rem;
`;
export const AcademyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  width: 100%;
  padding: 1.5rem 2.1rem;
  font-size: 1.8rem;
  font-weight: 700;
  background: #d2daeb;
`;
export const Content = styled.div`
  width: 100%;
  padding: 8px 2.1rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 7px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    & p {
      color: #fff;
    }
  }
  & p {
    color: ${({ theme }) => theme.colors.accent};
    font-size: 1.8rem;
    font-weight: 600;
  }
  & span {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 120%;
  }
`;
