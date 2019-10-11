import React from "react"
import styled from "styled-components"
import SEO from "../atoms/SEO"
import Layout from "../organisms/Layout"
import { graphql, Link, useStaticQuery } from "gatsby"
import BgImg from "gatsby-background-image"
import Box from "../atoms/Box"
import Text from "../atoms/Text"

const BackgroundImage = styled(props => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "bg-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return <BgImg fluid={data.image.childImageSharp.fluid} {...props} />
})`
  position: absolute !important;
  top: 223px;
  right: 127px;
  width: 466px;
  height: 547px;
  z-index: -1;
`

const Nav = ({ children, ...props }) => (
  <Box tag="nav" {...props}>
    <ul
      css={`
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;

        && > * + * {
          margin-left: 15px;
        }
      `}
    >
      {children}
    </ul>
  </Box>
)

const NavItem = props => (
  <li>
    <Text tag={Link} variant="headline" uppercase {...props} />
  </li>
)

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <BackgroundImage />
    <Box flex direction="column" mb="40px">
      <Box tag="header" flex>
        <Nav>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/contact" style={{ marginLeft: 120 }}>
            Info
          </NavItem>
          <NavItem to="/map" style={{ opacity: 0.5 }}>
            Map
          </NavItem>
        </Nav>
      </Box>

      <Text
        variant="display"
        uppercase
        css={`
          margin-top: 110px;
          margin-right: 110px;
          align-self: flex-end;
        `}
      >
        +420 123 456 789
      </Text>

      <Text
        variant="display"
        uppercase
        css={`
          margin-top: 45px;
        `}
      >
        Banskobystricka
        <br />
        2019/41
      </Text>

      <Text
        variant="display"
        uppercase
        css={`
          margin-top: 20px;
        `}
      >
        Prague
      </Text>

      <Text
        variant="display"
        uppercase
        css={`
          margin-left: 240px;
        `}
      >
        Czechia
      </Text>

      <Box flex mt="145px">
        <Text variant="headline" underline href="mailto:hi@osa.tattoo">
          hi@osa.tattoo
        </Text>

        <Text
          variant="body"
          css={`
            opacity: 0.4;
            margin-left: auto;
            margin-right: 30px;
          `}
        >
          ©2019 Etheric for OSA
        </Text>
      </Box>
    </Box>
  </Layout>
)

export default Contact
