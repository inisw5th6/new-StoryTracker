import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = ({ x = 0, y = 0, onClick }) => {
  const navigate = useNavigate(); // 페이지 이동을 위한 navigate 함수

  const handleClick = () => {
    if (onClick) {
      onClick(); // 추가적인 동작이 필요하면 실행
    }
    navigate("/"); // 클릭 시 HomeBackground로 이동
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
      onClick={handleClick} // 클릭 핸들러 추가
      style={{ cursor: "pointer" }} // 클릭 시 커서 변경
    >
      {/* 투명한 클릭 영역 */}
      <rect
        width="48"
        height="48"
        fill="transparent"
        pointerEvents="all" // 클릭 이벤트 감지
      />
      {/* 뒤로가기 화살표 경로 */}
      <path
        d="M22 34L12 24L22 14M36 34L26 24L36 14"
        stroke="#A98157"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BackButton;