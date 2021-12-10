import styled from "styled-components";
import { Button } from "../../styles/Button";
import { ReactComponent as PatternRight } from "../images/pattern-intro-right-desktop.svg";
import { ReactComponent as PatternLeft } from "../images/pattern-intro-left-desktop.svg";
import { Line } from "../../styles/Line";
import { device } from "../../styles/Breakpoints";
import HeroMobile from "../images/hero-mobile.jpg";

export const HeroContainer = styled.div`
  background-color: ${(props) => props.theme.colors.violet};
  height: 25rem;
  color: #fafafa;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 6rem 10rem;

  @media ${device.mobile} {
    flex-direction: column-reverse;
    text-align: center;
    padding: 0rem;
    padding-bottom: 4rem;
    height: auto;
  }
`;

export const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 4rem, 5rem);
  padding: 2.5rem 0rem;
  line-height: 1;
  font-weight: 400;
`;

export const HeroImg = styled.img`
  height: clamp(28rem, 45vw, 40rem);
  padding-left: 1rem;
  @media ${device.mobile} {
    object-fit: cover;
    padding: 0;
    height: auto;
    background-image: url(${HeroMobile});
  }
`;

export const HeroBtn = styled(Button)`
  border: 2px solid #fafafa;
  color: #fafafa;
  &:hover {
    color: ${(props) => props.theme.colors.violet};
    background-color: #fafafa;
  }
  @media ${device.mobile} {
  }
`;

export const HeroText = styled.p`
  line-height: 1.5;
  margin-bottom: 25px;
`;

export const HeroWrapper = styled.div`
  width: 80%;
  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
    padding: 0rem 1rem;
  }
`;

export const HeroLine = styled(Line)`
  @media ${device.mobile} {
    display: none;
  }
`;

export const RightPattern = styled(PatternRight)`
  position: relative;
  top: 0;
  right: 0;
  z-index: 5;
`;

export const LeftPattern = styled(PatternLeft)`
  position: relative;
  right: 0;
`;
