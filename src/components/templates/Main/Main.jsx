import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { h1, h3, underline } from "../../../utils/css"
import SEO from "../../atoms/SEO/SEO"
import ArrowRight from "../../atoms/ArrowRight/ArrowRight"
import Indicator from "../../atoms/Indicator/Indicator"
import VerticalSeparator from "../../atoms/VerticalSeparator/VerticalSeparator"
import BackgroundImage from "./BackgroundImage"

const Container = styled.section`
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
`

const Title = styled.h1`
  ${h1};
  grid-area: title;
  text-transform: uppercase;
  color: #d9d9d9;
  margin-bottom: 13px;
`

const ArrowLink = styled(Link)`
  grid-area: arrow;
  justify-self: center;
  align-self: start;
  cursor: pointer;
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

const AddressText = styled.address`
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

const Main = () => (
  <>
    <SEO title="Home" />
    <BackgroundImage />
    <Container>
      <Title>
        <strong>OSA</strong>
        <br />
        TATTOO
        <br />
        STUDIO
      </Title>
      <ArrowLink to="/contact/">
        <ArrowRight />
      </ArrowLink>
      <MoreText>
        <span>More</span>{" "}
        {/* This span is needed here in order to correctly position the ::after underline element, since css grid considers it as an item in the grid */}
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
        <VerticalSeparator />
        <Indicator />
        <Indicator />
      </Indicators>
      <DateText>June, 2019</DateText>
    </Container>
  </>
)

export default Main
