import React, { useState } from "react"
import styled, { css, ThemeProvider } from "styled-components"
import MenuButton from "../../atoms/MenuButton"
import Close from "../../atoms/Close/Close"
import { HStack, VStack } from "../../atoms/Stack"
import { Link } from "gatsby"
import LanguageCircle from "./LanguageCircle"
import Text from "../../atoms/Text"
import Box from "../../atoms/Box"
import { dark } from "../../../theme"
import Line from "../../atoms/Line"

const OuterContainer = styled.div`
  position: fixed;
  //background-color: #f30016;
  background-color: ${props => props.theme.colors.background};
  z-index: 100;
  //transition: clip-path 0.3s ease-in, background-color 0.3s ease-in;
  transition: clip-path 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  clip-path: circle(
    calc(130px / 2) at calc(100% - 130px / 2 - 30px) calc(130px / 2 + 30px)
  );

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  ${props =>
    props.open &&
    css`
      //background-color: #000;
      clip-path: circle(100%);
    `}
`

const GridContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;

  grid:
    ". . ." 140px
    ". menu languages" 260px
    ". social address" auto
    ". . ." 40px
    / 250px auto 650px;
`

const MenuLink = styled(Text).attrs(props => ({
  tag: Link,
  variant: "headline",
  activeStyle: { color: props.theme.colors.red.default },
}))`
  text-decoration: none;
  transition: color 0.1s ease-in;

  &:hover {
    color: ${props => props.theme.colors.active};
  }
`

// const MenuLink = props => {
//   const theme = useContext(ThemeContext)
//   return (
//     <Text
//       as={Link}
//       variant="headline"
//       activeStyle={{ color: theme.colors.active }}
//       style={{ textDecoration: "none" }}
//       {...props}
//     />
//   )
// }

const StyledMenuButton = styled(MenuButton)`
  transition: transform 0.1s ease-in, opacity 0.3s ease-in;
  opacity: 1;

  ${props =>
    props.open &&
    css`
      transition: transform 0.1s ease-in, opacity 0.1s ease-in;
      opacity: 0;
      pointer-events: none;
    `}
`

const CloseButton = styled.button`
  -webkit-appearance: none;
  border: none;
  background-color: transparent;
  position: absolute;
  top: 12px;
  right: 16px;
  cursor: pointer;

  transition: opacity 0.1s ease-in, transform 0.2s ease-in;
  opacity: 0;

  ${props =>
    props.open &&
    css`
      transition: opacity 0.3s ease-in, transform 0.2s ease-in;
      opacity: 1;
    `}

  :focus {
    outline: 0;
  }

  :hover {
    transform: scale(0.8);
  }
`

const Menu = () => {
  const [open, setOpen] = useState(false)
  // const rerender = useRerender()

  // useEffect(() => {
  //   const handleResize = () => {
  //     rerender()
  //   }
  //
  //   window.addEventListener("resize", handleResize)
  //
  //   return () => window.removeEventListener("resize", handleResize)
  // }, [])

  return (
    <ThemeProvider theme={dark}>
      <>
        <StyledMenuButton open={open} onClick={() => setOpen(open => !open)} />
        <OuterContainer open={open}>
          <GridContainer>
            <CloseButton open={open} onClick={() => setOpen(open => !open)}>
              <Close />
            </CloseButton>

            <Box tag="nav" gridArea="menu">
              <VStack tag="ul" style={{ listStyle: "none" }}>
                <li>
                  <MenuLink to="/">Main</MenuLink>
                </li>
                <li>
                  <MenuLink to="/about">About</MenuLink>
                </li>
                <li>
                  <MenuLink to="/gallery">Gallery</MenuLink>
                </li>
                <li>
                  <MenuLink to="/faq">FAQ</MenuLink>
                </li>
                <li>
                  <MenuLink to="/contact">Contact</MenuLink>
                </li>
              </VStack>
            </Box>
            <Box flex direction="column" mainAxis="flex-end" gridArea="social">
              <VStack tag="ul" spacing="10px" style={{ listStyle: "none" }}>
                <li>
                  <Text variant="body">Instagram</Text>
                </li>
                <li>
                  <Text variant="body">Facebook</Text>
                </li>
                <li>
                  <Text variant="body">Twitter</Text>
                </li>
              </VStack>
            </Box>
            <HStack
              gridArea="languages"
              style={{ gridArea: "languages" }}
              spacing="10px"
            >
              <LanguageCircle active>EN</LanguageCircle>
              <LanguageCircle>CZ</LanguageCircle>
            </HStack>
            <Box flex direction="column" pr="28px" gridArea="address">
              <Line />
              <Box style={{ borderTop: "1px solid white", width: "100%" }} />
              <VStack style={{ marginTop: 25 }} spacing="12px">
                <Text variant="body">+420 777 777 777</Text>
                <Text tag="a" variant="body" href="mailto:hi@osa.tattoo">
                  hi@osa.tattoo
                </Text>
                <Text variant="body">
                  Banskobystricka 11/1231 <br /> 16000 Prague, Czechia
                </Text>
              </VStack>
              <Box flex mt="auto">
                <Text variant="body">Privacy Policy</Text>
                <Text
                  variant="body"
                  style={{ marginLeft: "auto", transform: "translateX(-30px)" }}
                >
                  ©2019 Etheric for OSA
                </Text>
              </Box>
            </Box>
          </GridContainer>
        </OuterContainer>
      </>
    </ThemeProvider>
  )
}

export default Menu
