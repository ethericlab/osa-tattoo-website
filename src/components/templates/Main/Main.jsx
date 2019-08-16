import SEO from "../../atoms/SEO/SEO"
import React from "react"
import styled from "styled-components"
import { h1, h3, underline } from "../../../utils/css"
import ArrowRight from "../../atoms/ArrowRight/ArrowRight"
import Indicator from "../../atoms/Indicator/Indicator"

const Container = styled.div`
  height: 100%;
  display: grid;
  grid:
    "title title . " 270px
    ". . arrow" auto
    "more . address" 240px
    ". . ." 25px
    "indicators . date" 30px
    / 320px auto 565px;
  padding-bottom: 40px;
  //justify-content: stretch;
`

const Title = styled.h1`
  ${h1};
  grid-area: title;
  text-transform: uppercase;
  color: #d9d9d9;
  margin-bottom: 13px;
`

const Arrow = styled(ArrowRight)`
  grid-area: arrow;
  justify-self: center;
  align-self: start;
`

const MoreText = styled.h1`
  grid-area: more;
  ${h1};
  text-transform: uppercase;
  color: #d9d9d9;

  & > span {
    ${underline(20, { height: 2, color: "#D9D9D9" })};
  }
`

const AddressText = styled.h1`
  grid-area: address;
  ${h1};
  text-transform: uppercase;
  color: #d9d9d9;
  //width: 565px;
  //display: inline-block;

  & > span {
    ${underline(60, { color: "#D9D9D9" })};
    width: 100%; // required for longer underline, as in the design
  }
`

const DateText = styled.p`
  grid-area: date;
  margin: 0;
  ${h3};
  font-weight: 400;
  color: #d9d9d9;
`

const Indicators = styled.div`
  width: 50%;
  grid-area: indicators;
  display: flex;
`

const Separator = styled.div`
  margin-left: auto;
`

const Main = () => (
  <>
    <SEO title="Home" />
    <Container>
      <Title>
        <strong>OSA</strong>
        <br />
        TATTOO
        <br />
        STUDIO
      </Title>
      <Arrow />
      <MoreText>
        {/*
            This span is needed here in order to correctly position the ::after underline element, since css grid
            considers it as an item in the grid
        */}
        <span>More</span>
      </MoreText>
      <AddressText>
        <span>
          Minsk, BY
          <br />
          20 — 19
        </span>
      </AddressText>
      <Indicators>
        <Indicator active />
        <Separator />
        <Indicator />
        <Indicator />
      </Indicators>
      <DateText>June, 2019</DateText>
    </Container>
  </>
)

export default Main
