import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const IconRelationship = ({ onClick }) => {
  const [color, setColor] = useState("#A98157"); // 기본 색상
  const navigate = useNavigate();
  const location = useLocation(); // 현재 경로를 감지

  // 페이지가 RelationBackground일 때만 색상 변경
  useEffect(() => {
    if (location.pathname === "/relationship") {
      setColor("#6F605F"); // 페이지가 'RelationshipBackground'일 때 색상 변경
    } else {
      setColor("#A98157"); // 다른 페이지일 때 색상 원래대로
    }
  }, [location.pathname]);

  const handleClick = () => {
    navigate("/relationship"); // RelationshipBackground로 이동
  };

  return (
    <svg
      width="76"
      height="76"
      viewBox="0 0 76 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleClick} // 클릭 핸들러 연결
      style={{ cursor: "pointer" }} // 클릭 시 커서 변경
    >
      {/* 투명한 클릭 영역 */}
      <rect
        width="76"
        height="76"
        fill="transparent"
        pointerEvents="all" // 클릭 이벤트 감지
      />

      {/* 첫 번째 아이콘 */}
      <g transform="translate(38, 24)">
        <g transform="translate(-24, -24)">
          <path
            d="M10.8 38.4C11.7223 37.367 16.0421 32.6134 17.308 32.6134H30.6928C32.5272 32.6134 36.2719 36.5538 37.2 37.9428M43.2 24C43.2 34.6039 34.6038 43.2 24 43.2C13.3961 43.2 4.79999 34.6039 4.79999 24C4.79999 13.3962 13.3961 4.80005 24 4.80005C34.6038 4.80005 43.2 13.3962 43.2 24ZM30.8777 17.456C30.8777 13.7929 27.7854 10.8 24.0006 10.8C20.2158 10.8 17.1235 13.7929 17.1235 17.456C17.1235 21.119 20.2158 24.1119 24.0006 24.1119C27.7853 24.1119 30.8777 21.119 30.8777 17.456Z"
            stroke={color} // 색상을 상태로 설정
            strokeWidth="3"
          />
        </g>
      </g>

      {/* 두 번째 아이콘 */}
      <g transform="translate(38, 62)">
        <g transform="translate(-38, -9)">
          <path
            d="M17.7179 3.68H24.0539V5.392H17.7179V3.68ZM19.5419 7.136H21.6539V10.848H19.5419V7.136ZM23.2219 3.68H25.3179V4.608C25.3179 5.648 25.3179 7.12 24.9659 8.96L22.9019 8.736C23.2219 6.912 23.2219 5.632 23.2219 4.608V3.68ZM26.7579 2.608H28.9019V13.696H26.7579V2.608ZM28.0539 7.12H30.6619V8.864H28.0539V7.12ZM19.0139 15.472H29.3659V17.168H19.0139V15.472ZM19.0139 12.704H21.1419V16H19.0139V12.704ZM17.0459 11.712L16.8539 10.032C19.4139 10.032 22.9819 9.984 25.9579 9.568L26.0859 11.072C23.0299 11.648 19.5899 11.712 17.0459 11.712ZM36.9926 6.512H40.0006V8.208H36.9926V6.512ZM36.9126 10.208H39.9366V11.904H36.9126V10.208ZM42.0166 2.608H44.0486V17.424H42.0166V2.608ZM38.9606 2.928H40.9446V16.768H38.9606V2.928ZM35.6166 4.352H37.6646C37.6646 8.56 36.4006 11.92 32.2726 14.352L31.0726 12.864C34.4166 10.832 35.6166 8.368 35.6166 4.784V4.352ZM31.9206 4.352H36.3366V6.048H31.9206V4.352ZM47.0674 9.216H57.4834V10.912H47.0674V9.216ZM45.5154 14.016H58.9234V15.76H45.5154V14.016ZM51.1314 9.984H53.2594V14.576H51.1314V9.984ZM47.0674 3.616H57.3714V5.328H49.1954V9.952H47.0674V3.616Z"
            fill={color} // 색상을 상태로 설정
          />
        </g>
      </g>
    </svg>
  );
};

export default IconRelationship;