import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    caret-color: transparent;
    
  }

  :root {
    font-size: 62.5%;
    --roboto-font-family: 'Roboto', sans-serif;
    --libre128-font-family: 'Libre Barcode 128 Text', system-ui;
    --rhodium-font-family:'Rhodium Libre', serif;
  }

  body {
    font-size: 1.6rem;
    
    color: ${({ theme }) => theme.COLORS.Black};
    background: ${({ theme }) => theme.COLORS.Orange};
  }

  a {
    text-decoration: none;
  }

`
