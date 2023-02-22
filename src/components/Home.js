import React, { useEffect } from "react";
import styled from "styled-components";
import Slider from "./imgSlider";
import Viewer from "./Viewer";
import Movies from "./Movies";

function Home() {
  return (
    <div>
      <Container>
        <Slider />
        <Viewer />
        <Movies />
      </Container>
    </div>
  );
}

export default Home;

const Container = styled.main`
  height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow: hidden;

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
