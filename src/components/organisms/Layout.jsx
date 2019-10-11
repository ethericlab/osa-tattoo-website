import React from "react"
import * as PropTypes from "prop-types"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import Sidebar from "./Sidebar"
import Menu from "./Menu/Menu"
import { normalize } from "polished"
import { dark, light } from "../../theme"

export const GlobalStyles = createGlobalStyle`
  ${normalize()}
  
  *, *::after, *::before {
    box-sizing: border-box;
  }
  
  :root {
    font-family: 'Arimo', sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.primary};
  }
  
  html, body, #___gatsby, #gatsby-focus-wrapper {
    width: 100vw;
    height: 100vh;  
  }
`

export const Container = styled.div`
  height: 100%;
`

export const SidebarWrapper = styled.aside`
  top: 40px;
  left: 0;
  position: fixed;
  width: 190px;
  height: 100%;
  padding: 10px 0 40px 25px;
  border-right: 1px solid ${props => props.theme.colors.secondary};
`

export const ContentWrapper = styled.main`
  //margin-left: 190px;
  height: 100%;
  width: 100%;
  padding: 35px 30px 0 calc(190px + 30px);
`

const Layout = ({ children, theme = "dark" }) => (
  <ThemeProvider
    theme={theme === "dark" ? dark : theme === "light" ? light : theme}
  >
    <>
      <GlobalStyles />
      <Container>
        <Menu />
        <SidebarWrapper>
          <Sidebar />
        </SidebarWrapper>
        <ContentWrapper>{children}</ContentWrapper>
      </Container>
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']),
  children: PropTypes.node.isRequired,
}

export default Layout
