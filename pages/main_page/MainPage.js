import React, { useRef } from 'react';
import Intro from '../../components/sections/Intro';
import AboutMe from '../../components/sections/Aboutme';

function MainPage() {
  const aboutMeRef = useRef(null);

  return (
    <>
      <Intro aboutMeRef={aboutMeRef} />
      <AboutMe ref={aboutMeRef} />
    </>
  );
}

export default MainPage;
