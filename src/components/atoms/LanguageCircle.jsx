import React from "react"
import styled, { css } from "styled-components"
import Text from "./Text"

const CircleLink = styled.a`
  -webkit-appearance: none;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${props => props.theme.colors.gray.lighter};
  cursor: pointer;
  text-decoration: none;

  ${props =>
    props.active &&
    css`
      background-color: ${props => props.theme.colors.gray.lighter};
      color: ${props => props.theme.colors.black.default};
    `}
`

const LanguageCircle = ({ children, ...props }) => (
  <CircleLink {...props}>
    <Text variant="caption">{children}</Text>
  </CircleLink>
)

export default LanguageCircle
