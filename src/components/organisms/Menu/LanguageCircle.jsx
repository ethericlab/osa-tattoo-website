import React from "react"
import styled from "styled-components"
import Text from "../../atoms/Text"

const LanguageCircle = styled(Text).attrs({ tag: "a", variant: "caption" })`
  -webkit-appearance: none;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  border: 1px solid ${props => props.theme.colors.primary};
  color: ${props =>
    props.active ? props.theme.colors.background : props.theme.colors.primary};
  background-color: ${props =>
    props.active ? props.theme.colors.primary : "transparent"};
`

export default LanguageCircle
