import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f9;
    color: #333;
  }

  h2 {
    color: #2c3e50;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  input, button {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
    font-size: 16px;
  }

  button {
    background-color: #3498db;
    color: white;
    cursor: pointer;
    border: none;
  }

  button:hover {
    background-color: #2980b9;
  }

  nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 10px;
  }

  nav a {
    color: #3498db;
  }
`;

export default GlobalStyles;
