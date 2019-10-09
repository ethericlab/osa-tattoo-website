import React from "react"
import styled, { css } from "styled-components"
import Line from "../../atoms/Line"
import Text from "../../atoms/Text"

// Has to be a styled component to use in Container :hover
const QuestionText = styled(Text).attrs({ variant: "headline" })`
  transition: color 0.1s ease-in;
`

const Container = styled.div`
  width: 100%;
  //min-height: 90px;
  cursor: pointer;

  &:hover {
    ${QuestionText} {
      color: ${props => props.theme.colors.active};
    }
  }

  ${props =>
    props.active &&
    css`
      ${QuestionText} {
        color: ${props => props.theme.colors.active};
      }
    `}
`

const QuestionItem = ({ text, active }) => (
  <Container active={active}>
    <Line secondary mb="20px" />
    <QuestionText>{text}</QuestionText>
  </Container>
)

export default QuestionItem
