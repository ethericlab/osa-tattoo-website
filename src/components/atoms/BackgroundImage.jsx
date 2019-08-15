import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BgImg from "gatsby-background-image"

const BackgroundImage = ({ name, ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "${name}" }) {
        childImageSharp {
          fixed(width: 4096) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return <BgImg fixed={data.image.childImageSharp.fixed} {...props} />
}

export default BackgroundImage
