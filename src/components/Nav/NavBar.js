import React from "react";
import { Nav, NavLink, NavBtn, NavContainer } from "./styled";
import { ReactComponent as Logo } from "../images/logo.svg";

export default function NavBar() {
  return (
    <Nav>
      <NavContainer>
        <Logo />
      </NavContainer>
      <NavContainer>
        <NavLink>How We Work</NavLink>
        <NavLink>Blog</NavLink>
        <NavLink>Account</NavLink>
        <NavBtn>View Plans</NavBtn>
      </NavContainer>
    </Nav>
  );
}
