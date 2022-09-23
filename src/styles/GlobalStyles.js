import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    background-color: #fff;
}

a {
    text-decoration: none;
}

ul {
    list-style: none;
}

`;

// font-family: 'GTWalsheimPro', sans-serif;
// font-family: 'WhyteInktrap', sans-serif;

export default GlobalStyles