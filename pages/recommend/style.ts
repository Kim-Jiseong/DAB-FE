import styled, { css } from "styled-components";

export const Container = styled.main`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const PaperContainer = styled.div`
  width: 100%;
  /* width: calc(100% - 30rem); */
  display: flex;
  flex-direction: column;
  gap: 2.6rem;
  padding-bottom: 10rem;
`;
export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ContentTitle = styled.div`
  width: 100%;
  padding: 1.6rem 2.1rem;
  font-size: 2rem;
  font-weight: 600;
  line-height: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
`;

export const ContentInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
`;
export const ContentSubTitle = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
`;
export const BtnWrapper = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div {
    display: flex;
    gap: 1.4rem;
  }
`;
export const Btn = styled.button`
  padding: 1rem 1.4rem;
  background: ${({ theme }) => theme.colors.secondary};
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  color: white;
  &:hover {
    background: ${({ theme }) => theme.colors.accent};
  }
`;
