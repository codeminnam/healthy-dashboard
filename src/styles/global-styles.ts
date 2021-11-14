import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    overflow: hidden;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,Roboto,"Helvetica Neue",Arial,sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6{
    font-family:'Maven Pro', sans-serif;
  }
`;

export default GlobalStyle;
