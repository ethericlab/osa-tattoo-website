import React from "react"
import styled from "styled-components"
import Layout from "../organisms/Layout"
import Text from "../atoms/Text"
import Box from "../atoms/Box"
import Line from "../atoms/Line"

const Title = styled(Text).attrs({ tag: "h2" })`
  font-size: 36px;
  line-height: 36px;
  text-transform: uppercase;
  letter-spacing: -1px;
`

// const Grid = styled(Box)`
//   display: grid;
//   grid:
//     "headline headline" 240px
//     "text" "image" auto
//     / 1fr 1fr;
// `

const Image = styled.img`
  object-fit: cover;
  object-position: top;
`

const About = () => (
  <Layout theme="light">
    <Text variant="headline" uppercase>
      ABOUT
    </Text>
    <Box flex direction="column">
      <Title style={{ marginTop: 40 }}>
        BETWEEN CREATIVITY
        <br />
        AND CRIMINALITY
      </Title>

      <Line secondary mt={170} mb={20} />

      <Box flex>
        <Box pr={36} style={{ width: "50%" }}>
          <Text variant="headline" style={{ marginRight: 40 }}>
            OSA Tattoo Studio, is a newly refurbished and sterile studio based
            in PRAGUE. We pride ourselves on our service to the client; not only
            are our rates very reasonable, we also try to make each and every
            design custom and original. At OSA Tattoo Studio, we are individuals
            working together, pursuing a common goal: Art (the learning and
            creation of Art). Both learning and creating Art is a never-ending
            process and we are determined to strive each day, to learn more and
            create better. In the tattooing business since 2009, the first OSA
            Tattoo Studio was set up in PRAGUE. Custom tattooing and body
            piercing has no limits by us.
          </Text>
          <Line secondary mt={40} mb={20} />
          <Text variant="headline">READ MORE</Text>
        </Box>
        <Image src={require('../../images/about-image.png')} style={{ width: '50%' }}/>
      </Box>
    </Box>
  </Layout>
)

export default About
