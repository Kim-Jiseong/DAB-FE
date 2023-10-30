import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import * as S from "./style";
import Header from "components/Header";
import ProfileContainer from "./components/ProfileContainer";
import SearchBar from "components/SearchBar";
import { paperList } from "constants/papers";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("react-force-graph-3d"), {
  ssr: false,
});
function useParentWidth() {
  const ref = useRef<any>(null); // 부모 컴포넌트의 DOM 요소를 참조하기 위한 ref
  const [width, setWidth] = useState<any>(0); // 부모 컴포넌트의 너비를 저장하는 상태

  useEffect(() => {
    // 부모 컴포넌트의 너비를 설정하는 함수
    const updateWidth = () => {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    };

    // 초기 너비 설정
    updateWidth();

    // resize 이벤트에 이벤트 핸들러 연결
    window.addEventListener("resize", updateWidth);

    // 컴포넌트가 언마운트될 때 이벤트 핸들러 해제
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []); // 빈 의존성 배열을 사용하여 useEffect가 한 번만 실행되게 합니다.

  return [ref, width];
}

const generateGraphData = (papers: any) => {
  const nodes = papers.map((paper: any) => ({
    id: paper.title, // 논문 제목을 노드의 ID로 사용합니다.
    name: paper.title, // 논문 제목을 노드 라벨로 사용합니다.
    url: paper.link, // 논문 링크를 노드의 URL 정보로 저장합니다.
  }));

  const links: any = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      links.push({
        source: nodes[i].id,
        target: nodes[j].id,
      });
    }
  }
  return { nodes, links };
};

const Home: NextPage = () => {
  const data = generateGraphData(paperList);
  const [graphData, setGraphData] = useState(null);
  const [ref, width] = useParentWidth();
  useEffect(() => {
    // 컴포넌트가 마운트될 때 그래프 데이터를 설정합니다.
    const data = generateGraphData(paperList);
    setGraphData(data as any);
  }, []);
  return (
    <div>
      <Head>
        <title>Kurator</title>
        <meta
          name="description"
          content="Kurator: 고려대학교 맞춤형 논문 추천 서비스"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.Container>
        <ProfileContainer></ProfileContainer>
        <S.MainContainer ref={ref}>
          <SearchBar />
          <S.RecommendationContainer>
            <h3>
              <b>이재승</b>님을 위해 이런 논문을 추천해요!
            </h3>
            <S.RecommendationWrapper>
              {paperList &&
                paperList.map(
                  (paper, idx) =>
                    idx < 4 && (
                      <div
                        key={paper.link}
                        style={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: "6px",
                        }}
                      >
                        <div id="index">{idx + 1}</div>
                        <p id="content">{paper.title}</p>
                      </div>
                    )
                )}
            </S.RecommendationWrapper>
          </S.RecommendationContainer>
          {typeof window !== "undefined" && graphData && (
            <DynamicComponent
              graphData={graphData}
              nodeLabel="name"
              nodeAutoColorBy="id"
              onNodeClick={(node) => {
                window.open(node.url, "_blank");
              }}
              width={width}
            />
          )}
        </S.MainContainer>
      </S.Container>
    </div>
  );
};

export default Home;
