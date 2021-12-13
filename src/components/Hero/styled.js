import styled from "styled-components";
import { Button } from "../../styles/Button";
import { ReactComponent as PatternRight } from "../images/pattern-intro-right-desktop.svg";
import { ReactComponent as PatternLeft } from "../images/pattern-intro-left-desktop.svg";
import { Line } from "../../styles/Line";
import { device } from "../../styles/Breakpoints";

export const HeroContainer = styled.section`
  background-color: ${(props) => props.theme.colors.violet};
  height: 25rem;
  color: #fafafa;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 6rem 10rem;
  margin-bottom: 14rem;
  @media ${device.mobile} {
    flex-direction: column-reverse;
    text-align: center;
    padding: 0rem;
    padding-bottom: 4rem;
    height: auto;
  }
`;

export const HeroTitle = styled.h1`
  font-size: clamp(4rem, 6vw, 5rem);
  padding: 2.5rem 0rem;
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
    height: auto;
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
  margin-bottom: 1.5rem;
`;

export const HeroWrapper = styled.div`
  width: 80%;

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
  position: relative;
  top: 0;
  right: 0;
  z-index: 5;
`;

export const LeftPattern = styled(PatternLeft)`
  position: relative;
  right: 0;
`;
