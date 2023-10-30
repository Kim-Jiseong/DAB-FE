import Title from "components/Title";
import { paperList } from "constants/papers";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("react-force-graph-3d"));

const generateGraphData = (papers: any) => {
  const nodes = papers.map((paper: any) => ({
    id: paper.title,
    name: paper.title,
    url: paper.link,
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
