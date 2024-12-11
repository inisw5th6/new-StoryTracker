import React from 'react';

const UnfilledBookmark = ({ x, y, onClick }) => (
    <svg
      x={x}
      y={y}
      width="40"
      height="43"
      viewBox="0 0 40 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick} // 클릭 이벤트를 svg 태그에 추가
      style={{ cursor: "pointer" }} // 클릭 시 포인터 커서로 변경
    >
      {/* 투명한 클릭 영역 추가 */}
      <rect
        x="0" 
        y="0" 
        width="40" 
        height="43" 
        fill="transparent"
        onClick={onClick}  // 클릭 시 상태 변경
      />
      <path
        d="M31.6667 37.625L20 28.6667L8.33337 37.625V8.95833C8.33337 8.00797 8.68456 7.09654 9.30968 6.42453C9.93481 5.75253 10.7827 5.375 11.6667 5.375H28.3334C29.2174 5.375 30.0653 5.75253 30.6904 6.42453C31.3155 7.09654 31.6667 8.00797 31.6667 8.95833V37.625Z"
        stroke="#A98157"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  
  export default UnfilledBookmark;