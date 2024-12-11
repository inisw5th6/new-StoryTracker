import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 임포트
import BackgroundRect from '../small/background';
import Bar from '../small/bar';
import Box2 from '../small/box2'
import Toolbar from "../small/toolbar";
import BackButton from "../small/backbutton";
import SwitchButton from "../small/switchbutton";

const RouteBackground = () => {
  
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
      <SwitchButton
        x={428 /2 -400 /2 + 400 - 13 - 48}
        y={47 + 19}
      />
      <Toolbar 
        x={428 /2 -428 /2} 
        y={47 + 773 + 11} // Box2의 y값에 11px을 더하여 위치
      />
    </svg>
  );
};

export default RouteBackground;