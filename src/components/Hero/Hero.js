import React from "react";
import {
  HeroContainer,
  HeroTitle,
  HeroImg,
  HeroBtn,
  HeroText,
  HeroLine,
  HeroTag,
  HeroWrapper,
  RightPattern,
  LeftPattern,
  HeroMobileImg,
  RightMobPattern,
  LeftMobPattern,
} from "./styled";
import HeroImage from "../images/hero-desktop.jpg";
import HeroMobile from "../images/hero-mobile.jpg";

export default function Hero() {
  return (
    <HeroWrapper>
      <HeroContainer>
        <HeroTag>
          <HeroLine />
          <HeroTitle>Humanizing your insurance.</HeroTitle>
          <HeroText>
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that's right for
            you. Ensure you and your loved ones are protected.
          </HeroText>
          <HeroBtn>View Plans</HeroBtn>
        </HeroTag>
        <HeroImg src={HeroImage} alt="Family holding hands" />
        <HeroMobileImg src={HeroMobile} alt="Family holding hands" />
        <RightPattern />
        <LeftPattern />
        <RightMobPattern />
        <LeftMobPattern />
      </HeroContainer>
    </HeroWrapper>
  );
}
