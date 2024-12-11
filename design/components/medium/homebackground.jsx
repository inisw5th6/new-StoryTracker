import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 사용
import GlobalBackground from "./globalbackground";
import Box1 from "../small/box1";
import Search from "../small/search";
import ReadingMessege from '../small/readingmessege'
import 남한산성 from "../../assets/images/남한산성.png"
import Toolbar from "../small/toolbar";

const HomeBackground = () => {
    const navigate = useNavigate(); // 라우터 이동 함수 

    // 이미지 클릭 핸들러
    const handleImageClick = () => {
        navigate("/novel"); // "novel"경로로 이동
    };

    return (
        <svg
        width="428"
        height="926"
        viewBox="0 0 428 926"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        >
        <GlobalBackground />
        <Search 
            x={428 / 2 - 384 / 2} // 14
            y={926 / 2 - 714 / 2 - 30 - 13}
        />
        <ReadingMessege 
            x={428 / 2 - 117 / 2} // 중앙 정렬
            y={926 /2 -714 /2 + 57} // 위치 조정
        />
        <image 
            href={남한산성} 
            x={428 /2 -312 /2}
            y={926 /2 -714 /2 + 103} 
            width="312" 
            height="411" 
            onClick={handleImageClick} // 클릭 이벤트 추가
            style={{ cursor: "pointer" }} // 클릭 가능한 스타일 추가
        />
        <Toolbar 
            x={428 /2 -428 /2} 
            y={926 / 2 - 714 / 2 + 714 + 11} // Box2의 y값에 11px을 더하여 위치
        />
        <Box1 
            x={428 /2 -400 /2} // 14
            y={926 /2 -714 /2} // 106
        />
        </svg>
    );
};

  export default HomeBackground;