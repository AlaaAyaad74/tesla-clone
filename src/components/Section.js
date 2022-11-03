import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
function Section(props) {
  return (
    <Sectionstyle bgImage={props.img}>
      <Fade bottom>
        <ItemText>
          <h1>{props.title}</h1>
          <p>Order Online for Touchless Delivery</p>
        </ItemText>
      </Fade>
      <Fade bottom>
        <GroupButton>
          <LeftButton>{props.leftBtnText}</LeftButton>
          {props.rightBtnText ? (
            <RightButton>{props.rightBtnText}</RightButton>
          ) : (
            ""
          )}
         
        </GroupButton>
        <Downarrow src="/images/down-arrow.svg" />
      </Fade>
    </Sectionstyle>
  );
}
export default Section;
const Sectionstyle = styled.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url(${props.bgImage})`};
`;
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;
const GroupButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 55vh;
  @media (max-width: 570px) {
    margin-top: 50vh;
    flex-direction: column;
    align-items: center;
  }
`;
const LeftButton = styled.button`
  width: 250px;
  border: none;
  outline: none;
  border-radius: 7px;
  height: 40px;
  margin: 10px;
  font-size: 0.9rem;
  font-weight: 700;
  background-color: rgba(23, 26, 32, 0.8);
  color: #fff;
  cursor: pointer;
`;
const RightButton = styled(LeftButton)`
  background-color: #fff;
  color: rgba(23, 26, 32, 0.8);
`;
const Downarrow = styled.img`
  margin-top: 30px;
  width: 40px;
  animation-name: animationArrow;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  @media (max-width: 570px) {
    margin-top: 15px;
  }
`;
