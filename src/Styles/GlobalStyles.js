import { createGlobalStyle } from "styled-components";



export default createGlobalStyle
`
  root: {
    --twitterColor: #1d9bf0;
    --twitterHoverBtn: #1a8cd8;
    --twitterHover: rgb(15, 20, 25, 10% );
  }

* {
    margin: 0;
}

body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

.App {
    display: flex;
    height: 100vh;
    max-width: 1250px;
    margin: 0 auto;
}

`