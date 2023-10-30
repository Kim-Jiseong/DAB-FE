import React from "react";
import * as S from "./style";
import Title from "components/Title";
import SearchBar from "components/SearchBar";
import { noticeList } from "constants/noticeList";
function Notice() {
  return (
    <div>
      <Title text="고려대 대학원 연구소식">
        <SearchBar />
      </Title>
      <S.Container>
        <S.ContentContainer>
          {noticeList &&
            noticeList.map((notice) => (
              <S.NoticeContainer onClick={() => window.open(notice.link)}>
                {notice.title}
              </S.NoticeContainer>
            ))}
        </S.ContentContainer>
      </S.Container>
    </div>
  );
}

export default Notice;
