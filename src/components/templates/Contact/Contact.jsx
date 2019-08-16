import React from 'react'
import styled from "styled-components"
import SEO from "../../atoms/SEO/SEO"
import { h1, h3, h4 } from "../../../utils/css"
import BackgroundImage from "./BackgroundImage"

const Container = styled.section`
  height: 100%;
  display: grid;
  grid:
    "menu menu ." 30px
    ". . ." 100px
    ". phone phone" 90px
    ". . ." 45px
    "address address address" 180px
    ". . ." 20px 
    "city city city" 90px
    ". country country" 90px
    ". . ." auto
    "email . by" 30px
    / 245px 85px auto;
  padding-bottom: 40px;
`

const Header = styled.header`
  grid-area: menu;
  display: flex;
`

const Heading = styled.h3`
  ${h3};
  color: #D9D9D9;
  text-transform: uppercase;
`

const Nav = styled.nav`
  margin-left: auto;
`

const NavItem = styled.a.attrs(({ active }) => ({
  style: {
    opacity: active ? 1 : 0.5
  }
}))`
  ${h3};
  color: #D9D9D9;
  text-transform: uppercase;
`

const PhoneText = styled.h1`
  grid-area: phone;
  ${h1};
  color: #D9D9D9;
  text-transform: uppercase;
`

const AddressText = styled.h1`
  grid-area: address;
  ${h1};
  color: #D9D9D9;
  text-transform: uppercase;
`

const CityText = styled.h1`
  grid-area: city;
  ${h1};
  color: #D9D9D9;
  text-transform: uppercase;
`

const CountryText = styled.h1`
  grid-area: country;
  ${h1};
  color: #D9D9D9;
  text-transform: uppercase;
`

const EmailLink = styled.a`
  grid-area: email;
  ${h3};
  color: #D9D9D9;
  text-decoration: underline;
`

const ByText = styled.p`
  grid-area: by;
  ${h4};
  color: #D9D9D9;
  opacity: 0.3;
  justify-self: end;
  margin-right: 30px;
`

const Contact = () => (
  <>
    <SEO title="Contact" />
    <BackgroundImage />
    <Container>
      <Header>
        <Heading>About</Heading>
        <Nav>
          <NavItem active css={`margin-right: 15px`}>Info</NavItem>
          <NavItem>Map</NavItem>
        </Nav>
      </Header>
      <PhoneText>+420 123 456 789</PhoneText>
      <AddressText>Banskobystricka 2019/08</AddressText>
      <CityText>Prague</CityText>
      <CountryText>Czechia</CountryText>
      <EmailLink href="mailto:hi@osa.tattoo">hi@osa.tattoo</EmailLink>
      <ByText>©2019 Etheric for OSA</ByText>
    </Container>
  </>
);

export default Contact
