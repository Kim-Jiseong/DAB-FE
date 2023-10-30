import React from "react";
import styled from "styled-components";

function ProfileContainer() {
  return (
    <Container>
      <ProfileImageWrapper>
        <img src="https://images.unsplash.com/photo-1487309078313-fad80c3ec1e5?auto=format&fit=crop&q=80&w=2648&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </ProfileImageWrapper>
      <h3>이재승</h3>
      <p style={{ fontSize: "1.4rem", fontWeight: "500", marginTop: "1.4rem" }}>
        고려대학교 대학원생
      </p>
      <CardWrapper>
        <Card>석사과정</Card>
        <Card>전기전자공학부</Card>
      </CardWrapper>
      <Divider />
      <h3>연구 주제</h3>
      <CardWrapper>
        <Card>Statistical Machine learning</Card>
        <Card>Graph Neutral Networks</Card>
        <Card>Time Series Forecasting</Card>
      </CardWrapper>
    </Container>
  );
}

export default ProfileContainer;

const Container = styled.div`
  width: 30rem;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid #7184a7;
  border-top: 5rem solid #7184a7;
  flex-shrink: 0;
  & h3 {
    /* margin-top: 2rem; */
    font-size: 2rem;
    font-weight: 700;
  }
`;
const ProfileImageWrapper = styled.div`
  width: 15rem;
  height: 15rem;
  border-radius: ${({ theme }) => theme.radii.full};
  overflow: hidden;
  border: 2px solid #fff;
  transform: translateY(-20%);
  & img {
    width: 100%;
  }
`;

const Divider = styled.div`
  width: 80%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.8rem;
`;

const CardWrapper = styled.div`
  margin: 2.4rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;

const Card = styled.span`
  width: auto;
  padding: 4px 8px;
  color: ${({ theme }) => theme.colors.accent};
  display: inline-flex;
  font-weight: 500;
  justify-content: center;
  align-items: center;
  background-color: #e1ebff;
  flex-shrink: 0;
`;
