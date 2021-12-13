import React from "react";
import {
  HeroContainer,
  HeroTitle,
  HeroImg,
  HeroBtn,
  HeroText,
  HeroLine,
  HeroWrapper,
  RightPattern,
  HeroMobileImg,
} from "./styled";
import HeroImage from "../images/hero-desktop.jpg";
import HeroMobile from "../images/hero-mobile.jpg";

export default function Hero() {
  return (
    <HeroContainer>
      <HeroWrapper>
        <HeroLine />
        <HeroTitle>Humanizing your insurance.</HeroTitle>
        <HeroText>
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that's right for
          you. Ensure you and your loved ones are protected.
        </HeroText>
        <HeroBtn>View Plans</HeroBtn>
      </HeroWrapper>
      <HeroImg src={HeroImage} />
      <HeroMobileImg src={HeroMobile}/>
    </HeroContainer>
  );
}
