import styled from "styled-components";
import { Button } from "../../styles/Button";

export const Nav = styled.nav`
  height: 75px;
  display: flex;
  justify-content: space-between;
  top: 0;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  padding: 0rem 10rem;
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
`;

export const NavBtn = styled(Button)`
  border: 2px solid ${(props) => props.theme.colors.darkViolet};
  &:hover {
    color: #fafafa;
    background-color: ${(props) => props.theme.colors.darkViolet};
  }
`;
