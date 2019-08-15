import React from "react"
import { h4 } from "../../../utils/css"
import styled from "styled-components"

const CircleContainer = styled.div`
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
`

const MenuText = styled.h4`
  ${h4};
  color: #d9d9d9;
  transform: rotate(-15deg);
  text-transform: uppercase;
`

const MenuButton = () => (
  <CircleContainer>
    <MenuText>Menu</MenuText>
  </CircleContainer>
)

export default MenuButton
