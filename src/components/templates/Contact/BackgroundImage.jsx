import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import BgImg from "gatsby-background-image"
import React from "react"

const BackgroundImage = styled((props) => {
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
  position: fixed !important;
  // Copied from Figma... IDK how to place this image otherwise
  left: 58.82%;
  right: 8.82%;
  top: 24.78%;
  bottom: 14.39%;
  z-index: -1;
`

export default BackgroundImage
