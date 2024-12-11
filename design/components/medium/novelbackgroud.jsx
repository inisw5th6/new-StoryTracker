import React, { useState } from "react";
import BackgroundRect from '../small/background';
import Bar from '../small/bar';
import Box2 from '../small/box2'
import Toolbar from "../small/toolbar";
import BackButton from "../small/backbutton";
import UnfilledBookmark from "../small/unfilled-bookmark";
import FilledBookmark from "../small/filled-bookmark";

const NovelBackground = () => {
  
  // 상태 추가: bookmark가 채워졌는지 여부
  const [isFilled, setIsFilled] = useState(false);

  // 북마크 상태 토글
  const handleBookmarkClick = () => {
    setIsFilled(!isFilled); // 북마트 색 채워짐
  };

  return (
    <svg
      width="428"
      height="926"
      viewBox="0 0 428 926" // 좌표계를 유지
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <BackgroundRect />
      <Bar y="10"/>
      <Box2 
        x={428 /2 -400 /2} // 14
        y={47} // Box2가 BackgroundRect 기준 47px 아래에 위치
      />
      <BackButton
        x={428 /2 -400 /2 + 13} 
        y={47 + 19} // viwbox=0 0 29 38, box2 왼쪽 모서리 기준 23, 9
      /> 

      {/* UnfilledBookmark 또는 FilledBookmark를 조건부로 렌더링 */}
      {isFilled ? (
        <FilledBookmark 
          x={428 / 2 - 400 / 2 + 400 - 13 - 40} 
          y={47 + 23} // Box2의 y값에서 13px 아래로 배치
        />
      ) : (
        <UnfilledBookmark 
          x={428 / 2 - 400 / 2 + 400 - 13 - 40} 
          y={47 + 23} // Box2의 y값에서 13px 아래로 배치
          onClick={handleBookmarkClick} // 클릭 시 상태 변경
        />
      )}

      <Toolbar 
        x={428 /2 -428 /2} 
        y={47 + 773 + 11} // Box2의 y값에 11px을 더하여 위치
      />
    </svg>
  );
};

export default NovelBackground;