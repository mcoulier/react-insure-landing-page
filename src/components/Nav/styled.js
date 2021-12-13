import styled from "styled-components";
import { Button } from "../../styles/Button";
import { device } from "../../styles/Breakpoints";

export const Nav = styled.header`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  padding: 0rem 10rem;
  background-color: #fafafa;
  @media ${device.mobile} {
    padding: 0rem 2rem;
  }
`;

export const NavContainer = styled.nav`
  @media ${device.mobile} {
    display: none;
  }
`;

export const NavLink = styled.a`
  margin-right: 1.5rem;
  cursor: pointer;
  color: ${(props) => props.theme.colors.greyViolet};

  @media ${device.mobile} {
    color: #fafafa;
    margin: 0;
  }

  &:hover {
    color: rgb(22,22,22);
  }
`;

export const NavToggle = styled.div`
  &:hover {
    cursor: pointer;
  }

  @media (min-width: 905px) {
    display: none;
  }
`;

export const NavBtn = styled(Button)`
  border: 2px solid ${(props) => props.theme.colors.darkViolet};
  &:hover {
    color: #fafafa;
    background-color: ${(props) => props.theme.colors.darkViolet};
  }

  @media ${device.mobile} {
    border: 2px solid #fafafa;
    color: #fafafa;
    width: 80%;
    margin-top: 1rem;
    &:hover {
      color: ${(props) => props.theme.colors.violet};
      background-color: #fafafa;
    }
  }
`;

export const MobileNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 5rem;
  left: 0;
  min-height: 60vh;
  background-color: ${(props) => props.theme.colors.darkViolet};
  width: 100%;
  padding-top: 2rem;
  line-height: 3;
  @media (min-width: 905px) {
    display: none;
  }
`;
