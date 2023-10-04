import React, { useRef,useState, useEffect } from 'react';
import Intro from '../components/sections/Intro';
import AboutMe from '../components/sections/Aboutme';
import styled from "styled-components";

const MainContainer = styled.div`
  overflow: hidden;
  overflow-y: scroll;
  height: 100vh;
  scroll-snap-type: mandatory;
  scroll-snap-type: y mandatory;
`;
function MainPage() {
  const aboutMeRef = useRef(null);
  
  return (
   <MainContainer>
    <Intro aboutMeRef={aboutMeRef} />
    <AboutMe ref={aboutMeRef} />
    </MainContainer>
  );
}


export default MainPage;
