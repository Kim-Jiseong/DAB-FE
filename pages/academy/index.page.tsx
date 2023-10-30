import React from "react";
import * as S from "./style";
import Title from "components/Title";
import { academyList } from "constants/academyList";
function Academy() {
  return (
    <div>
      <Title text="관련 학회 링크"></Title>
      <S.Container>
        <S.ContentContainer>
          {academyList &&
            academyList.map((academy) => (
              <S.AcademyContainer key={academy.category}>
                <S.Title>{academy.category}</S.Title>
                {academy.conferences.map((conf) => (
                  <S.Content
                    key={conf.name}
                    onClick={() => window.open(conf.link)}
                  >
                    <p>{conf.name}</p>
                    <span>{conf.link}</span>
                  </S.Content>
                ))}
              </S.AcademyContainer>
            ))}
        </S.ContentContainer>
      </S.Container>
    </div>
  );
}

export default Academy;
