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
  FooterWrapper,
  MobilePattern,
  DesktopPattern,
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
      id: 1,
      title: "Our Company",
      content: ["How We Work", "Why Insure?", "View Plans", "Reviews"],
    },
    {
      id: 2,
      title: "Help Me",
      content: ["FAQ", "Terms Of Use", "Privacy Policy", "Cookies"],
    },
    {
      id: 3,
      title: "Contact",
      content: ["Sales", "Support", "Live Chat"],
    },
    {
      id: 4,
      title: "Others",
      content: ["Careers", "Press", "Licenses"],
    },
  ];

  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterTop>
          <Logo />
          <SocialWrapper>
            {icons.map((icon, index) => (
              <ListItem key={index}>
                <Link href="#">
                  <SocialIcon src={icon} alt="" width={24} height={24} />
                </Link>
              </ListItem>
            ))}
          </SocialWrapper>
        </FooterTop>
        <FooterNav>
          {links.map((link, index) => (
            <FooterList>
              <FooterListItem key={link.id}>
                <Title>{link.title}</Title>
              </FooterListItem>
              {link.content.map((content) => (
                <FooterListItem>
                  <FooterLink href="#">{content}</FooterLink>
                </FooterListItem>
              ))}
            </FooterList>
          ))}
        </FooterNav>
      </FooterContainer>
      <DesktopPattern />
      <MobilePattern />
    </FooterWrapper>
  );
}
