import React from 'react'
import styled from 'styled-components'
import Layout from "../../organisms/Layout"
import Text from "../../atoms/Text"
import QuestionItem from "./QuestionItem"
import Line from "../../atoms/Line"
import Answer from "./Answer"

import flowerImg from '../../../images/flower.png'
import Box from "../../atoms/Box"

const QuestionContainer = styled.div`
  margin-top: 145px;
`

const QuestionGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, minmax(260px, 100%));
  grid-auto-rows: 110px;
  grid-gap: 35px;
  
  @media (min-width: 1400px) {
    grid-template-columns: repeat(3, minmax(260px, 100%));
  }
  
  @media (min-width: 1400px) {
    grid-template-columns: repeat(4, minmax(260px, 100%));
  }
`

const mockText = "Taking good care of your new tattoo right after you get it will help it heal quickly and stay vibrant. Keep the bandage that your tattoo artist applied on for at least a few hours before gently removing it, washing your tattoo with lukewarm water and antibacterial soap, then patting the skin dry. By keeping your skin evenly moisturized and clean, staying out of the sun, and avoiding picking or itching your new design, your tattoo will heal beautifully."

const FAQ = () => (
  <Layout theme="light">
    <Text variant="headline" uppercase>GOT SOME QUESTIONS?</Text>
    <QuestionContainer>
      <QuestionGrid mb="30px">
        <QuestionItem text="How to take care of a new tattoo?" />
        <QuestionItem text="How to take care of a new tattoo?" />
        <QuestionItem text="How to take care of a new tattoo?" />
        <QuestionItem text="How to take care of a new tattoo?" />
        <QuestionItem text="How to take care of a new tattoo?" />
        <QuestionItem text="How to take care of a new tattoo?" active />
        <QuestionItem text="How to take care of a new tattoo?" />
        <QuestionItem text="How to take care of a new tattoo?" />
      </QuestionGrid>
      <Line secondary mb="20px" />
      <Answer image={flowerImg} text={mockText} mr="40px"/>
    </QuestionContainer>
  </Layout>
)

export default FAQ
