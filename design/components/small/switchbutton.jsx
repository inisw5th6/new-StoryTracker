import React, { useState } from "react";

const SwitchButton = ({ x, y }) => {
  // 상태 관리: true이면 아이콘 1, false이면 아이콘 2
  const [isIcon1, setIsIcon1] = useState(true);

  // 클릭 핸들러
  const handleClick = () => {
    setIsIcon1(!isIcon1); // 상태를 반전
    console.log("SwitchButton clicked!");
  };

  return (
    <svg
      x={x}
      y={y}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleClick}
      style={{ cursor: "pointer" }} // 클릭 시 커서 변경
    >
      {/* 배경 영역 */}
      <rect width="48" height="48" rx="10" fill="#D9D9D9" />
      
      {/* 투명한 클릭 영역 */}
      <rect
        x="0"
        y="0"
        width="48"
        height="48"
        fill="transparent"
        pointerEvents="all"
      />

      {/* 아이콘 렌더링: isIcon1 상태에 따라 토글 */}
      {isIcon1 ? (
        // 아이콘 1
        <g transform="translate(12, 12)">
          <path 
            d="M8.625 19.3333V6.28571M14.8125 17.1429V4.02679M3 17.7143V4L8.47826 6.28571L14.7391 4L21 6.28571V20L14.7391 17.7143L8.47826 20L3 17.7143Z" 
            stroke="#A98157" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </g>
      ) : (
        // 아이콘 2
        <g transform="translate(12, 12)">
          <path 
            d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" 
            stroke="#A98157" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          <path 
            d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" 
            stroke="#A98157" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </g>
      )}
    </svg>
  );
};

export default SwitchButton;