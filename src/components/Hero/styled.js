import styled from "styled-components";
import { Button } from "../../styles/Button";
import { ReactComponent as PatternRight } from "../images/pattern-intro-right-desktop.svg";
import { ReactComponent as PatternLeft } from "../images/pattern-intro-left-desktop.svg";
import { ReactComponent as PatternMobRight } from "../images/pattern-intro-right-mobile.svg";
import { ReactComponent as PatternMobLeft } from "../images/pattern-intro-left-mobile.svg";
import { Line } from "../../styles/Line";
import { device } from "../../styles/Breakpoints";

export const HeroWrapper = styled.section`
  background-color: ${(props) => props.theme.colors.violet};
  position: relative;
`;

export const HeroContainer = styled.div`
  height: 25rem;
  color: #fafafa;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 6rem 10rem;
  margin-bottom: 14rem;
  max-width: 1440px;
  margin: auto;

  @media ${device.mobile} {
    flex-direction: column-reverse;
    text-align: center;
    padding: 0rem;
    padding-bottom: 4rem;
    height: 50rem;
  }
`;

export const HeroTitle = styled.h1`
  font-size: clamp(3rem, 6vw, 4.8rem);
  line-height: 1;
  font-weight: 400;
`;

export const HeroImg = styled.img`
  height: clamp(30rem, 45vw, 40rem);
  padding-left: 1rem;

  @media ${device.mobile} {
    display: none;
    object-fit: cover;
    padding: 0;
  }
`;

export const HeroMobileImg = styled.img`
  display: none;

  @media ${device.mobile} {
    height: clamp(30rem, 50vw, 35rem);
    display: block;
    object-fit: cover;
    padding: 0;
  }
`;

export const HeroBtn = styled(Button)`
  border: 2px solid #fafafa;
  color: #fafafa;

  &:hover {
    color: ${(props) => props.theme.colors.violet};
    background-color: #fafafa;
  }
`;

export const HeroText = styled.p`
  line-height: 1.5;
  padding: 2rem 0rem;
`;

export const HeroTag = styled.div`
  width: 65%;

  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
    padding: 0rem 2rem;
  }
`;

export const HeroLine = styled(Line)`
  @media ${device.mobile} {
    display: none;
  }
`;

export const RightPattern = styled(PatternRight)`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 5;

  @media ${device.mobile} {
    display: none;
  }
`;

export const LeftPattern = styled(PatternLeft)`
  position: absolute;
  left: 0;
  top: 30rem;

  @media ${device.mobile} {
    display: none;
  }
`;

export const RightMobPattern = styled(PatternMobRight)`
  display: none;

  @media ${device.mobile} {
    display: inline;
    position: absolute;
    top: 48rem;
    right: 0;
  }
`;

export const LeftMobPattern = styled(PatternMobLeft)`
  display: none;

  @media ${device.mobile} {
    display: inline;
    position: absolute;
    bottom: 13.6rem;
    left: 0;
    z-index: 5;
  }
`;
