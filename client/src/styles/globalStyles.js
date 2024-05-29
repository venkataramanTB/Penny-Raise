import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f4f4f9;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;