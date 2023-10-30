import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 90vw;
  /* overflow: hidden; */
  /* min-height: calc(100vh - 9rem); */
  margin: 0 auto;
  position: relative;
  display: flex;
  /* justify-content: space-between; */
  gap: 3rem;
`;

export const MainContainer = styled.div`
  width: calc(100% - 30rem);
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const RecommendationContainer = styled.div`
  width: 100%;
  padding: 3.2rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  & h3 {
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
  }
`;

export const RecommendationWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 2.4rem;
  gap: 2rem;
  & #index {
    flex-shrink: 0;
    height: 3.5rem;
    width: 3.5rem;
    color: #fff;
    font-size: 2.4rem;
    font-weight: 600;
    line-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.secondary};
  }
  & > div:first-child #index {
    background-color: ${({ theme }) => theme.colors.primary};
  }
  & #content {
    width: calc(100% - 3.5rem - 6px);
    color: #2a3852;
    font-size: 2rem;
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
