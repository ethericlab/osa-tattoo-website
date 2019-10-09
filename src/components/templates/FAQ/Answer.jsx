import React from "react"
import styled from "styled-components"
import Text from "../../atoms/Text"
import { wordWrap } from "polished"
import Box from "../../atoms/Box"

const Image = styled.img`
  float: left;
  width: 50%;
  object-fit: cover;
  margin-right: 35px;
`

const AnswerText = styled(Text).attrs({ variant: "headline" })`
  ${wordWrap("normal")}
`

const Answer = ({ image, text, ...props }) => (
  <Box {...props}>
    <Image src={image} />
    <AnswerText>{text}</AnswerText>
  </Box>
)

export default Answer
