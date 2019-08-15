import { createGlobalStyle } from "styled-components"
import { normalize } from "polished"

const GlobalStyles = createGlobalStyle`
  ${normalize()}
  
  *, *::after, *::before {
    box-sizing: border-box;
  }
  
  html {
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

export default GlobalStyles
