import React, { useRef,useState, useEffect } from 'react';
import Intro from '../components/sections/Intro';
import AboutMe from '../components/sections/Aboutme';
import { MainContainer } from '../components/sections/Intro';
import Loading from '../components/loading';


function MainPage() {
  const aboutMeRef = useRef(null);
  
  return (
   <MainContainer>
    <Loading/>
    <Intro aboutMeRef={aboutMeRef} />
    <AboutMe ref={aboutMeRef} />
    </MainContainer>
  );
}


export default MainPage;
