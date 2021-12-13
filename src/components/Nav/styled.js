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

export const NavContainer = styled.nav``;

export const NavLink = styled.a`
  margin-right: 1.5rem;
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
