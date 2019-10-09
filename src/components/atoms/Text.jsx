import React from "react"
import * as PropTypes from "prop-types"
import styled, { css } from "styled-components"

const Text = ({ variant = "body", tag, uppercase, underline, ...props }) => {
  let Component = Default
  switch (variant) {
    case "display":
      Component = Display
      break
    case "headline":
      Component = Headline
      break
    case "body":
      Component = Body
      break
    case "caption":
      Component = Caption
      break
  }

  return <Component as={tag} {...props} />
}

Text.propTypes = {
  variant: PropTypes.oneOf(["display", "headline", "body", "caption"]),
}

const common = css`
  margin: 0;
  padding: 0;
  font-style: normal;
  font-weight: normal;
  color: ${props => props.theme.colors.primary};

  ${props =>
    props.uppercase &&
    css`
      text-transform: uppercase;
    `}

  ${props =>
    props.underline &&
    css`
      text-decoration: underline;
    `}
`

const Display = styled.h1`
  ${common};
  font-size: 110px;
  line-height: 90px;
  letter-spacing: -4px;
`
const Headline = styled.h2`
  ${common};
  font-size: 24px;
  line-height: 30px;
`
const Body = styled.span`
  ${common};
  font-size: 16px;
  line-height: 20px;
`
const Caption = styled.span`
  ${common};
  font-size: 12px;
  line-height: 14px;
`

const Default = styled.span`
  ${common}
`

export default Text
