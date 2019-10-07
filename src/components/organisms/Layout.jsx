import React from "react"
import PropTypes from "prop-types"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import Sidebar from "./Sidebar"
import Menu from "./Menu"
import { normalize } from "polished"
import theme from "../../theme"

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
    background: #070707;
    color: #fff;
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
  border-right: 1px solid #bfbfbf;
`

export const ContentWrapper = styled.main`
  height: 100%;
  width: 100%;
  padding-left: 30px;
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Container>
      <Menu />
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      <ContentWrapper>{children}</ContentWrapper>
    </Container>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
