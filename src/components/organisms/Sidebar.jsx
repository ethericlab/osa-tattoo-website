import React from "react"
import styled from "styled-components"
import Text from '../atoms/Text'
import { underline } from "../../utils/css"

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
`

const TopHeading = styled(Text).attrs({ variant: 'headline' })`
  line-height: 1;
  letter-spacing: -1px;
  margin-bottom: auto;
  text-transform: uppercase;
  /* Top-down transform */
  text-align: right;
  transform-origin: top right;
  transform: translateX(-100%) rotate(-90deg);
`

const BottomHeading = styled(Text).attrs({ variant: 'headline' })`
  line-height: 1;
  letter-spacing: -1px;
  text-transform: uppercase;
  /* Bottom-up transform */
  transform-origin: top left;
  transform: translateY(100%) rotate(-90deg);
`

const BottomHeadingFirstPart = styled.span`
  margin-left: 50px;
  margin-bottom: 5px;
  white-space: nowrap;
`

const BottomHeadingSecondPart = styled.span`
  transform: translateY(5px);
  ${underline(3)}
`

const Sidebar = () => (
  <Container>
    <TopHeading>
      OSA
      <br />
      Tattoo studio
    </TopHeading>
    <BottomHeading>
      <BottomHeadingFirstPart>Prague. SS2019</BottomHeadingFirstPart>
      <br />
      <BottomHeadingSecondPart>Booking Open</BottomHeadingSecondPart>
    </BottomHeading>
  </Container>
)

export default Sidebar
