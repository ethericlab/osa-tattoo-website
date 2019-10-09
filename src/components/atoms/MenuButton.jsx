import React from "react"
import styled from "styled-components"
import Text from './Text'

const CircleContainer = styled.button`
  -webkit-appearance: none;
  border: none;
  position: fixed;
  top: 30px;
  right: 30px;
  width: 130px;
  height: 130px;
  border-radius: 100%;
  background: #f30016;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.1s ease-in;
  cursor: pointer;
  z-index: 200;

  :focus {
    outline: 0;
  }

  :hover {
    transform: rotate(-15deg);
  }

  :active {
    transform: rotate(-15deg) scale(1.1);
  }
`

const MenuText = styled(Text).attrs({ variant: 'body' })`
  transform: rotate(-15deg);
  text-transform: uppercase;
  color: ${props => props.theme.colors.gray.lighter}
`

const MenuButton = ({ onClick, className }) => (
  <CircleContainer onClick={onClick} className={className}>
    <MenuText>Menu</MenuText>
  </CircleContainer>
)

export default MenuButton
