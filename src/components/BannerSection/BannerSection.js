import React from "react";
import {
  BannerTitle,
  BannerBtn,
  BannerContainer,
  BannerWrapper,
  DesktopPattern,
  MobilePattern,
} from "./styled";

export default function BannerSection() {
  return (
    <BannerWrapper>
      <BannerContainer>
        <BannerTitle>Find out more about how we work</BannerTitle>
        <BannerBtn>How We Work</BannerBtn>
        <DesktopPattern />
        <MobilePattern />
      </BannerContainer>
    </BannerWrapper>
  );
}
