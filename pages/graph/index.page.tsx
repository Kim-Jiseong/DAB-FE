import Title from "components/Title";
import { paperList } from "constants/papers";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("react-force-graph-3d"));

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

function Graph() {
  const data = generateGraphData(paperList);
  const [graphData, setGraphData] = useState(null);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 그래프 데이터를 설정합니다.
    const data = generateGraphData(paperList);
    setGraphData(data as any);
  }, []);
  return (
    <div>
      <Title text="논문 Graph"></Title>
      {typeof window !== "undefined" && graphData && (
        <DynamicComponent
          graphData={graphData}
          nodeLabel="name"
          nodeAutoColorBy="id"
          onNodeClick={(node) => {
            window.open(node.url, "_blank");
          }}
        />
      )}
    </div>
  );
}

export default Graph;
