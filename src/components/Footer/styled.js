import styled from "styled-components";
import { device } from "../../styles/Breakpoints";

export const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.colors.lightGrey};
  padding: 2rem 10rem;
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
  width: 80%;
  display: flex;
  justify-content: space-between;
  @media ${device.mobile} {
    flex-direction: column;
    width: auto;
    text-align: center;
  }
`;

export const FooterLinks = styled.section``;

export const FooterNav = styled.nav``;

export const Title = styled.p`
  color: ${(props) => props.theme.colors.greyViolet};
  padding: 2rem 0rem;
`;

export const FooterLink = styled(Link)`
  &:hover {
    border-bottom: 1px solid rgba(50, 50, 50, 0.15);
  }
`;

export const FooterListItem = styled(ListItem)`
  display: flex;
  flex-direction: column;
  line-height: 2;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.9rem;
`;
