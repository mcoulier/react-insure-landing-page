import { useState } from "react";
import {
  Nav,
  NavLink,
  NavBtn,
  NavContainer,
  NavToggle,
  MobileNav,
  MobilePattern,
  NavWrapper,
} from "./styled";
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as Open } from "../images/icon-hamburger.svg";
import { ReactComponent as Close } from "../images/icon-close.svg";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState("false");

  return (
    <NavWrapper>
      <Nav>
        <Logo />
        <NavContainer>
          <NavLink>How We Work</NavLink>
          <NavLink>Blog</NavLink>
          <NavLink>Account</NavLink>
          <NavBtn>View Plans</NavBtn>
        </NavContainer>
        {!isOpen && (
          <MobileNav>
            <NavLink>How We Work</NavLink>
            <NavLink>Blog</NavLink>
            <NavLink>Account</NavLink>
            <NavBtn>View Plans</NavBtn>
            <MobilePattern />
          </MobileNav>
        )}
        <NavToggle onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <Open /> : <Close />}
        </NavToggle>
      </Nav>
    </NavWrapper>
  );
}
