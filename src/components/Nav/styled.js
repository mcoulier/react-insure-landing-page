import styled from "styled-components";
import { Button } from "../../styles/Button";
import { device } from "../../styles/Breakpoints";

export const Nav = styled.nav`
  position: relative;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  top: 0;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  padding: 0rem 10rem;
  background-color: #fafafa;
  @media ${device.mobile} {
    padding: 0rem 2rem;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLink = styled.a`
  margin-right: 20px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.greyViolet};
  &:hover {
    color: ${(props) => props.theme.colors.darkViolet};
  }
  @media ${device.mobile} {
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
    display: none;
  }
`;

/* export const Toggle */