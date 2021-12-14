import styled from "styled-components";
import { device } from "../../styles/Breakpoints";
import { ReactComponent as PatternMobile } from "../images/pattern-footer-mobile.svg";
import { ReactComponent as PatternDesktop } from "../images/pattern-footer-desktop.svg";

export const FooterWrapper = styled.footer`
  background-color: ${(props) => props.theme.colors.lightGrey};
  position: relative;
`;

export const FooterContainer = styled.div`
  padding: 2rem 10rem;
  max-width: 1440px;
  margin: auto;

  @media ${device.mobile} {
    padding: 2rem 2rem;
  }
`;

export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(50, 50, 50, 0.15);
  padding: 2rem 0rem;
  @media ${device.mobile} {
    flex-direction: column;
    align-items: center;
  }
`;

export const SocialWrapper = styled.ul`
  list-style: none;
  display: flex;
  gap: 0 1rem;
  z-index: 8;

  @media ${device.mobile} {
    align-items: center;
    padding: 0;
    padding-top: 2rem;
  }
`;

export const ListItem = styled.li``;

export const SocialIcon = styled.img``;

export const Link = styled.a`
  &:hover {
    cursor: pointer;
  }
`;

export const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  width: 80%;
  @media ${device.mobile} {
    width: auto;
    text-align: center;
  }
`;

export const FooterNav = styled.nav`
  display: flex;
  justify-content: space-between;
  @media ${device.mobile} {
    flex-direction: column;
  }
`;

export const Title = styled.p`
  color: ${(props) => props.theme.colors.greyViolet};
  padding: 2rem 0rem;
`;

export const FooterLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const FooterListItem = styled(ListItem)`
  display: flex;
  flex-direction: column;
  line-height: 2;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1rem;
`;

export const MobilePattern = styled(PatternMobile)`
  display: none;

  @media ${device.mobile} {
    display: inline;
    position: absolute;
    left: 0;
    top: 0;
  }
`;

export const DesktopPattern = styled(PatternDesktop)`
  position: absolute;
  left: 0;
  top: 0;

  @media ${device.mobile} {
    display: none;
  }
`;
