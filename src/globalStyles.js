import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
    transition: background 0.2s ease-in, color 0.2s ease-in;
    font-family: Graphik, Arial, sans-serif;
    font-weight: normal;
  }

  header {
    padding: 2em;
  }

  h1, h2, h3, h4, h5 {
    font-family: Graphik, Arial, sans-serif;
    margin-bottom: 1rem;
    -webkit-font-smoothing: antialiased;
  }

  main {
    padding: 3em;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  footer {
    position: fixed;
    bottom: 0;
    background: ${({ theme }) => theme.accentBackgroundColor};
    width: calc(100% - 2em);
    padding: 1em;
    text-align: right;
  }
  
  ul {
    list-style: disc;
    li span {
      text-transform: capitalize;
    }
  }
`;

export const themes = {
  light: {
    primaryColor: 'rgb(0, 128, 81)',
    textColor: 'rgb(63, 70, 94)',
    backgroundColor: '#fff',
    accentBackgroundColor: '#F5F4F3',
    accentTextColor: '#fff',
    logo: '#00a669'
  },
  dark: {
    primaryColor: 'rgb(0, 128, 81)',
    textColor: '#fff',
    backgroundColor: 'rgb(63, 70, 94)',
    accentBackgroundColor: 'rgb(96,103,134)',
    accentTextColor: '#fff',
    logo: '#fff'
  }
}

export default GlobalStyle;
