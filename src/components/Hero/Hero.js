import React from "react";
import {
  HeroContainer,
  HeroTitle,
  HeroImg,
  HeroBtn,
  HeroText,
  HeroWrapper,
  RightPattern,
} from "./styled";
import HeroImage from "../images/hero-desktop.jpg";
import { Line } from "../../styles/Line";

export default function Hero() {
  return (
    <HeroContainer>
      <HeroWrapper>
        <Line />
        <HeroTitle>Humanizing your insurance.</HeroTitle>
        <HeroText>
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that's right for
          you. Ensure you and your loved ones are protected.
        </HeroText>
        <HeroBtn>View Plans</HeroBtn>
      </HeroWrapper>
      <HeroWrapper>
        <HeroImg src={HeroImage} />
      </HeroWrapper>
      {/*         <RightPattern />
       */}{" "}
    </HeroContainer>
  );
}
