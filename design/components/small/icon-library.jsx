import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const IconLibrary = ({ onClick }) => {
  const [color, setColor] = useState("#A98157"); // 기본 색상
  const navigate = useNavigate(); // 페이지 이동을 위한 navigate 함수
  const location = useLocation(); // 현재 경로를 감지

  // 페이지가 처음 로드될 때 색상 복원
  useEffect(() => {
    const savedColor = localStorage.getItem("iconColor");
    if (savedColor) {
      setColor(savedColor); // 저장된 색상으로 설정
    }
  }, []);

  // 페이지 경로에 따라 색상 변경
  useEffect(() => {
    if (location.pathname !== "/") {
      setColor("#A98157"); // 다른 페이지일 때 색상 초기화
    }
  }, [location.pathname]);

  const handleClick = () => {
    const newColor = "#6F605F"; // 클릭 시 색상 변경
    setColor(newColor);
    localStorage.setItem("iconColor", newColor); // 변경된 색상 저장

    if (onClick) {
      onClick(); // 추가적인 동작이 필요하면 실행
    }

    navigate("/"); // HomeBackground로 이동
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
      <g transform="translate(38, 24)"> {/* 가로 중심 (viewBox 가로 절반) */}
        <g transform="translate(-24, -24)"> {/* 첫 번째 아이콘 중심 보정 */}
          <path d="M8 39C8 37.6739 8.52678 36.4021 9.46447 35.4645C10.4021 34.5268 11.6739 34 13 34H40M8 39C8 40.3261 8.52678 41.5979 9.46447 42.5355C10.4021 43.4732 11.6739 44 13 44H40V4H13C11.6739 4 10.4021 4.52678 9.46447 5.46447C8.52678 6.40215 8 7.67392 8 9V39Z" 
          stroke={color} // 색상을 상태로 설정
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          />
        </g>
      </g>

      {/* 두 번째 아이콘 */}
      <g transform="translate(34, 62)"> {/* 첫 번째 아이콘보다 10px 아래로 이동 */}
        <g transform="translate(-20, -8)"> {/* 두 번째 아이콘 중심 보정 */}
          <path d="M17.6433 7.232H21.5473V8.944H17.6433V7.232ZM13.6113 3.744H15.3393V5.888C15.3393 9.616 14.0753 13.056 11.2913 14.448L9.96325 12.736C12.4913 11.568 13.6113 8.704 13.6113 5.888V3.744ZM14.0593 3.744H15.7553V5.888C15.7553 8.704 16.8273 11.408 19.2753 12.496L18.0113 14.192C15.2273 12.848 14.0593 9.584 14.0593 5.888V3.744ZM20.4913 2.592H22.6033V17.456H20.4913V2.592ZM35.206 2.608H37.222V17.424H35.206V2.608ZM33.43 8.288H35.894V10.016H33.43V8.288ZM32.022 2.832H34.006V16.752H32.022V2.832ZM27.03 4.912H28.646V6.224C28.646 9.888 27.846 13.12 25.382 14.608L24.102 12.976C26.326 11.696 27.03 9.072 27.03 6.224V4.912ZM27.462 4.912H29.094V6.224C29.094 8.832 29.846 11.296 32.054 12.448L30.838 14.064C28.342 12.72 27.462 9.664 27.462 6.224V4.912ZM24.582 4.112H31.318V5.824H24.582V4.112Z" 
          fill={color} // 색상을 상태로 설정
          />
        </g>
      </g>
    </svg>
  );
};

export default IconLibrary;