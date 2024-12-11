import React from "react";
import IconRelationship from "./icon-relationship";
import IconLibrary from "./icon-library";
import IconMappin from "./icon-mappin";

const Toolbar = ({ x, y }) => {
  const iconWidth = 76; // 각 아이콘의 너비
  const totalWidth = 428; // 전체 SVG 너비

  return (
    <svg
      x={x}
      y={y}
      width={totalWidth}
      height="76"
      viewBox="0 0 428 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 첫 번째 아이콘 (왼쪽에서 66px 안쪽) */}
      <g transform={`translate(52, 0)`}>
        <IconRelationship />
      </g>

      {/* 두 번째 아이콘 (중앙 정렬) */}
      <g transform={`translate(${(totalWidth - iconWidth) / 2}, 0)`}>
        <IconLibrary />
      </g>

      {/* 세 번째 아이콘 (오른쪽에서 66px 안쪽) */}
      <g transform={`translate(${totalWidth - iconWidth - 52}, 0)`}>
        <IconMappin />
      </g>
    </svg>
  );
};

export default Toolbar;