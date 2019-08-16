import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import BgImg from "gatsby-background-image"
import React from "react"

const BgImageContainer = styled((props) => {
  const data = useStaticQuery(graphql`
      query {
          image: file(relativePath: { eq: "bg-1.png" }) {
              childImageSharp {
                  fluid(maxWidth: 4096, fit: COVER, duotone: {highlight: "#000000", shadow: "#000000", opacity: 50}) {
                      ...GatsbyImageSharpFluid_withWebp
                  }
              }
          }
      }
  `)

  return <BgImg fluid={data.image.childImageSharp.fluid} {...props} />
})`
  padding: 35px 30px 0 25px;
  height: 100%;
  display: flex;
  align-items: stretch;
  
  &&&::before {
    opacity: 0.5;
  }
  
  &&&::after {
    opacity: 0.2;
  }
`

export default BgImageContainer
