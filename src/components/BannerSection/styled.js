import styled from "styled-components";
import { Button } from "../../styles/Button";
import { device } from "../../styles/Breakpoints";
import { ReactComponent as PatternDesktop } from "../images/pattern-banner-desktop.svg";
import { ReactComponent as PatternMobile } from "../images/pattern-banner-mobile.svg";

export const BannerWrapper = styled.section`
  @media ${device.desktop} {
    margin: 6rem 10rem;
  }
`;

export const BannerContainer = styled.div`
  background-color: ${(props) => props.theme.colors.violet};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0rem;
  margin: auto;
  max-width: 1440px;
  position: relative;
  height: 11.7rem;;

  @media ${device.mobile} {
    flex-direction: column;
    text-align: center;
    margin: 8rem 2rem;
    padding: 4rem 2rem;
  }
`;

export const BannerTitle = styled.h3`
  font-size: clamp(2rem, 8vw, 3.5rem);
  color: #fafafa;
  font-weight: 400;
  max-width: 45%;
  line-height: 1;
  margin-left: 4rem;

  @media ${device.mobile} {
    max-width: 100%;
    text-align: center;
    padding-bottom: 2rem;
    margin: 0;
  }
`;

export const BannerBtn = styled(Button)`
  border: 2px solid #fafafa;
  color: #fafafa;
  margin-right: 5rem;
  z-index: 8;

  @media ${device.mobile} {
    margin: 0;
  }

  &:hover {
    color: ${(props) => props.theme.colors.violet};
    background-color: #fafafa;
  }
`;

export const DesktopPattern = styled(PatternDesktop)`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 5;

  @media ${device.mobile} {
    display: none;
  }
`;

export const MobilePattern = styled(PatternMobile)`
  display: none;

  @media ${device.mobile} {
    display: inline;
    position: absolute;
    top: 0;
    right: 0;
  }
`;
