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
  padding: 35px 30px 0 25px;
  height: 100%;
  display: flex;
  align-items: stretch;
`

export const SidebarWrapper = styled.aside`
  width: 190px;
  height: 100%;
  padding-bottom: 40px;
  border-right: 1px solid ${props => props.theme.colors.secondary};
`

export const ContentWrapper = styled.main`
  height: 100%;
  width: 100%;
  padding-left: 30px;
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
