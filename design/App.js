import React, { useState, useEffect } from 'react';
import './Motion.css'; // CSS 스타일을 추가
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeBackground from './components/medium/homebackground';
import NovelBackground from './components/medium/novelbackgroud';
import RelationshipBackground from './components/medium/relationshipbackground';
import RouteBackground from './components/medium/routebackground';
import IntroBackground from './components/medium/introbackground';
import card from './assets/images/card.png'; // 카드 이미지 경로
import Box1 from './components/small/box1';

const App = () => {
  const [showIntro, setShowIntro] = useState(true); // 인트로를 처음 한 번만 보여주기 위한 상태
  const [showCard, setShowCard] = useState(false); // 카드가 등장하는 상태
  const [fadeOut, setFadeOut] = useState(false); // 페이드아웃 효과 상태

  useEffect(() => {
    // 1초 후 카드 등장
    const cardTimer = setTimeout(() => setShowCard(true), 1000);

    // 3초 후 페이드아웃 시작
    const fadeOutTimer = setTimeout(() => setFadeOut(true), 3000);

    // 4초 후 HomeBackground 표시
    const globalTimer = setTimeout(() => {
      setShowIntro(false); // 인트로 종료
    }, 4000);

    // 타이머 정리
    return () => {
      clearTimeout(cardTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(globalTimer);
    };
  }, []);

  // 인트로가 끝나면 HomeBackground로 전환
  if (!showIntro) {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<HomeBackground />} /> {/* 기본 화면 */}
          <Route path="/novel" element={<NovelBackground />} />
          <Route path="/relationship" element={<RelationshipBackground />} />
          <Route path="/route" element={<RouteBackground />} />
        </Routes>
      </Router>
    );
  }

  return (
    <div
      style={{
        position: 'relative',
        width: '428px',
        height: '926px',
        backgroundColor: 'white',
        overflow: 'hidden',
        transition: 'opacity 1s ease',
        opacity: fadeOut ? 0 : 1, // 페이드아웃 애니메이션
      }}
    >
      {/* Intro Background */}
      <IntroBackground />

      {/* 카드 이미지 */}
      <img
        src={card}
        alt="Card"
        style={{
          position: "absolute",
          left: "50%",
          transform: "translate(-50%, -50%)",
          top: showCard ? "50%" : "-400px", // 애니메이션 위치
          width: "398px", // 등장 시 크기 변화
          height: "714px",
          transition: "all 0.6s ease", // 크기와 위치 변화 애니메이션
        }}
      />

      {/* Box1 */}
      <Box1
        x={428 / 2 - 400 / 2} // 14
        y={926 / 2 - 714 / 2} // 106
      />
    </div>
  );
};

export default App;