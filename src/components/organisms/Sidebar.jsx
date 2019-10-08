import React from "react"
import styled from "styled-components"
import { bottomUp, h3, topDown, underline } from "../../utils/css"

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
`

const TopHeading = styled.h3`
  ${h3}
  ${topDown};
  margin-bottom: auto;
`

const BottomHeading = styled.h3`
  ${h3}
  ${bottomUp}
`

const BottomFirstPart = styled.span`
  margin-left: 50px;
  margin-bottom: 5px;
  white-space: nowrap;
`

const BottomSecondPart = styled.span`
  ${underline(3)};
  transform: translateY(5px);
`

const Sidebar = () => (
  <Container>
    <TopHeading>
      OSA
      <br />
      Tattoo studio
    </TopHeading>
    <BottomHeading>
      <BottomFirstPart>Prague. SS2019</BottomFirstPart>
      <br />
      <BottomSecondPart>Booking Open</BottomSecondPart>
    </BottomHeading>
  </Container>
)

export default Sidebar
