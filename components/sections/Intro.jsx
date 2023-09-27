import { useEffect, useState } from "react";
import styles from "../../styles/Test.module.css";
import styled from "styled-components";
const words = [
    "IoT Fullstack Developer",
    "Problem Solver",
    "Programmer",
    "Fullstack Developer",
];

const MainContainer = styled.div`
  overflow: hidden;
  overflow-y: scroll;
  height: 100vh;
  scroll-snap-type: mandatory;
  scroll-snap-type: y mandatory;
`;

.title {
  position: absolute;
  display: block;
  margin: 35vh 0 0 10vw;
}

.main {
  line-height: 58px;
  font-size: 64px;
  color: white;
  font-weight: 700;
}
.greetings {
  display: block;
  text-transform: uppercase;
}

.name {
  display: inline-block;
  text-transform: uppercase;
  bottom: -45px;
}
.child {
  height: 100vh;
  scroll-snap-align: start;
  position: relative;
  overflow: none;
  background-color: #121212;
}

export default function Intro({ aboutMeRef }) {
  const [show, setShow] = useState(false);
  const [skillSlide, setSkill] = useState(0);
  const [complieStat, setCompileStat] = useState(false);

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  const handleScrollClick = () => {
    if (aboutMeRef.current) {
      aboutMeRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  // typeWriter
  useEffect(() => {
    if (index === words.length) {
      return;
    }

    if (subIndex === words[index].length) {
      setCompileStat(false);
    }
    if (
      subIndex === words[index].length + 1 &&
      index !== words.length - 1 &&
      !reverse
    ) {
      setReverse(true);
      setSkill(index + 1);
      setCompileStat(true);

      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);

      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 100 : 70, parseInt(Math.random() * 250)));

    if (index == words.length - 1) {
      const timeout2 = setTimeout(() => {
        setSkill(index + 1);
        setShow(true);
        setCompileStat(true);
        clearTimeout(timeout2);
      }, 4000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [index, subIndex, reverse]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return(
    <MainContainer >

       
      </MainContainer>
  );

}