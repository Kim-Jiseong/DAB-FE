import Title from "components/Title";
import React from "react";
import * as S from "./style";
import { paperList } from "constants/papers";

function Recommendation() {
  return (
    <div>
      <Title text="논문추천" />
      <S.Container>
        <S.PaperContainer>
          {paperList &&
            paperList.map((paper) => (
              <S.ContentContainer>
                <S.ContentTitle>{paper.title}</S.ContentTitle>
                <S.ContentInfoWrapper>
                  <S.ContentSubTitle>논문 게재 상태</S.ContentSubTitle>
                  <p>{paper.status}</p>
                </S.ContentInfoWrapper>
                <S.ContentInfoWrapper>
                  <S.ContentSubTitle>키워드</S.ContentSubTitle>
                  <p>
                    {paper.keywords.map((keyword, idx) => (
                      <span>
                        {keyword}
                        {idx !== paper.keywords.length - 1 && ", "}
                      </span>
                    ))}
                  </p>
                </S.ContentInfoWrapper>
                <S.ContentInfoWrapper>
                  <S.ContentSubTitle>연구분야</S.ContentSubTitle>
                  <p>
                    {paper.researchField.map((data, idx) => (
                      <span>
                        {data}
                        {idx !== paper.researchField.length - 1 && ", "}
                      </span>
                    ))}
                  </p>
                </S.ContentInfoWrapper>
                <S.BtnWrapper>
                  <div>
                    <S.Btn onClick={() => window.open(paper.link)}>
                      원문보기
                    </S.Btn>
                    <S.Btn>인용하기</S.Btn>
                  </div>
                  <div>
                    <S.Btn>내보내기</S.Btn>
                    <S.Btn>내책장담기</S.Btn>
                    <S.Btn>공유하기</S.Btn>
                    <S.Btn>오류접수</S.Btn>
                  </div>
                </S.BtnWrapper>
              </S.ContentContainer>
            ))}
        </S.PaperContainer>
      </S.Container>
    </div>
  );
}

export default Recommendation;
