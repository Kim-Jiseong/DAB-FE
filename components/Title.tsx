import React from "react";
import styled from "styled-components";

function Title({ text, children }: { text: string; children?: any }) {
  return (
    <TitleWrapper child={children}>
      <span>{text}</span>
      {children}
    </TitleWrapper>
  );
}

export default Title;

const TitleWrapper = styled.div<{ child: any }>`
  width: 90%;
  margin: 0 auto;
  align-items: center;
  padding: 2rem;
  display: flex;
  position: relative;
  font-size: 2.4rem;
  font-weight: 700;
  gap: 2rem;
  justify-content: ${({ child }) => (child ? "space-between" : "center")};
  & span {
    display: flex;
    flex-shrink: 0;
  }
`;
