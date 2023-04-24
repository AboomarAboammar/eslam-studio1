import React from "react";
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

import {
  FooteLink,
  FooterContainer,
  FooterLinksContainer,
  FooterLinksItem,
  FooterLinksWrap,
  FooterLinkTitle,
  FooterWrap,
  SocialIconLinks,
  SocialIcons,
  SocialLogo,
  SocialMediaContainer,
  SocialMediaWrap,
  WebSiteRight,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrap>
            <FooterLinksItem>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooteLink to="Home">Home</FooteLink>
              <FooteLink to="about">about</FooteLink>
              <FooteLink to="Services">Services</FooteLink>
              <FooteLink to="Blog">Blog</FooteLink>
            </FooterLinksItem>
            <FooterLinksItem>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooteLink to="Home">Home</FooteLink>
              <FooteLink to="about">about</FooteLink>
              <FooteLink to="Services">Services</FooteLink>
              <FooteLink to="Blog">Blog</FooteLink>
            </FooterLinksItem>
          </FooterLinksWrap>
          <FooterLinksWrap>
            <FooterLinksItem>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooteLink to="Home">Home</FooteLink>
              <FooteLink to="about">about</FooteLink>
              <FooteLink to="Services">Services</FooteLink>
              <FooteLink to="Blog">Blog</FooteLink>
            </FooterLinksItem>
            <FooterLinksItem>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooteLink to="Home">Home</FooteLink>
              <FooteLink to="about">about</FooteLink>
              <FooteLink to="Services">Services</FooteLink>
              <FooteLink to="Blog">Blog</FooteLink>
            </FooterLinksItem>
          </FooterLinksWrap>
        </FooterLinksContainer>
        <SocialMediaContainer>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Eslam Studio
            </SocialLogo>
            <WebSiteRight>
              مستنيكم تنورونا في الاستوديو للحجز :01113088992 
            </WebSiteRight>
            <SocialIcons>
              <SocialIconLinks href="/">
                <FaFacebook />
              </SocialIconLinks>
              <SocialIconLinks href="/">
                <FaYoutube />
              </SocialIconLinks>
              <SocialIconLinks href="/">
                <FaInstagram />
              </SocialIconLinks>
              <SocialIconLinks href="/">
                <FaTwitter />
              </SocialIconLinks>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMediaContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
