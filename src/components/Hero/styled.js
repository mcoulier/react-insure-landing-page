import styled from "styled-components";
import { Button } from "../../styles/Button";
import { ReactComponent as PatternRight } from "../images/pattern-intro-right-desktop.svg";
import { ReactComponent as PatternLeft } from "../images/pattern-intro-left-desktop.svg";

export const HeroContainer = styled.div`
  background-color: ${(props) => props.theme.colors.violet};
  height: 400px;
  color: #fafafa;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 100px 140px;
`;

export const HeroTitle = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  line-height: 1;
`;

export const HeroImg = styled.img`
  height: clamp(27.9365rem, 45.1vw, 40.625rem);
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
  margin-bottom: 25px;
`;

export const HeroWrapper = styled.div`
  max-width: 540px;
`;

export const HeroLine = styled.div`
  border-top: 1px solid #fafafa;
  width: 160px;
  padding-bottom: 20px;
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
