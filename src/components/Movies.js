import React from "react";
import styled from "styled-components";

function Movies() {
  return (
    <Container>
      <h4>Recomended for you</h4>
      <Content>
        <Wrap>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1QcQTCt2fieJ31Im2wMs2H-IAJpw-646y-3JdJS_ChL3CFFwC"
            alt=""
          />
        </Wrap>

        <Wrap>
          <img
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR6yYmTRDuV0Yu688BX3qPoi5JcnoTAlg2a-ItuAJQeopBTSNvv"
            alt=""
          />
        </Wrap>

        <Wrap>
          <img
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTYyaCMGIDqOrnfFiXD5Wj3--gOX6aYjvtE-DKc3ym6Wyr_UQqH"
            alt=""
          />
        </Wrap>

        <Wrap>
          <img
            src="https://contentserver.com.au/assets/598411_p173378_p_v8_au.jpg"
            alt=""
          />
        </Wrap>

        <Wrap>
          <img src="/images/sim.jpg" alt="" />
        </Wrap>
        <Wrap>
          <img src="/images/sim.jpg" alt="" />
        </Wrap>
        <Wrap>
          <img src="/images/sim.jpg" alt="" />
        </Wrap>
        <Wrap>
          <img src="/images/sim.jpg" alt="" />
        </Wrap>
        <Wrap>
          <img src="/images/sim.jpg" alt="" />
        </Wrap>
        <Wrap>
          <img src="/images/sim.jpg" alt="" />
        </Wrap>
        <Wrap>
          <img src="/images/sim.jpg" alt="" />
        </Wrap>
        <Wrap>
          <img src="/images/sim.jpg" alt="" />
        </Wrap>
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div``;
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;
const Wrap = styled.div`
  cursor: pointer;
  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
  overflow: hidden;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px,
      rgb(0 0 0 /72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: white;
  }
`;
