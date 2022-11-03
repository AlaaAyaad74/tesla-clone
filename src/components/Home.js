import React from "react";
import styled from "styled-components";
import Section from "./Section.js";
function Home() {
  return (
    <HomeStyle>
      <Section
        title="Model 3"
        img="/images/model-3.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model Y"
        img="/images/model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model S"
        img="/images/model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model X"
        img="/images/model-x.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Solar Panels"
        img="/images/solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Solar Roof"
        img="/images/solar-roof.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Accesories"
        img="/images/accessories.jpg"
        leftBtnText="Shop Now"
      />
    </HomeStyle>
  );
}
export default Home;
const HomeStyle = styled.div`
  height: 100vh;
`;
