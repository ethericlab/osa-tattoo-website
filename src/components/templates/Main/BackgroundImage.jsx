import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import BgImg from "gatsby-background-image"
import React from "react"

const BackgroundImage = styled((props) => {
  const data = useStaticQuery(graphql`
      query {
          image: file(relativePath: { eq: "bg-1.png" }) {
              childImageSharp {
                  fluid(maxWidth: 4096) {
                      ...GatsbyImageSharpFluid_withWebp
                  }
              }
          }
      }
  `)

  return <BgImg fluid={data.image.childImageSharp.fluid} {...props} />
})`
  position: fixed !important;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  
  &::before {
    opacity: 0.5 !important;
  }
  
  &::after {
    opacity: 0.4 !important;
  }
`

export default BackgroundImage
