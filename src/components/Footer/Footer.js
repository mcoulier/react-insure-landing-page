import React from "react";
import {
  FooterContainer,
  FooterTop,
  SocialWrapper,
  SocialIcon,
  FooterList,
  FooterNav,
  Link,
  ListItem,
  FooterListItem,
  FooterLink,
  Title,
} from "./styled";
import { ReactComponent as Logo } from "../images/logo.svg";
import Facebook from "../images/icon-facebook.svg";
import Twitter from "../images/icon-twitter.svg";
import Instagram from "../images/icon-instagram.svg";
import Pinterest from "../images/icon-pinterest.svg";

export default function Footer() {
  const icons = [Facebook, Twitter, Pinterest, Instagram];
  const links = [
    {
      title: "Our Company",
      content: ["How We Work", "Why Insure?", "View Plans", "Reviews"],
    },
    {
      title: "Help Me",
      content: ["FAQ", "Terms Of Use", "Privacy Policy", "Cookies"],
    },
    {
      title: "Contact",
      content: ["Sales", "Support", "Live Chat"],
    },
    {
      title: "Others",
      content: ["Careers", "Press", "Licenses"],
    },
  ];

  return (
    <FooterContainer>
      <FooterTop>
        <Logo />
        <SocialWrapper>
          {icons.map((icon, index) => (
            <ListItem key={index}>
              <Link>
                <SocialIcon src={icon} />
              </Link>
            </ListItem>
          ))}
        </SocialWrapper>
      </FooterTop>
      <FooterNav>
        <FooterList>
          {links.map((link, index) => (
            <FooterListItem key={index}>
              <Title>{link.title}</Title>
              {link.content.map((content) => (
                <FooterLink>{content}</FooterLink>
              ))}
            </FooterListItem>
          ))}
        </FooterList>
      </FooterNav>
    </FooterContainer>
  );
}
