import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: "GT Walsheim Pro Regular";
    background-color: #fff;
}

a {
    text-decoration: none;
}

ul {
    list-style: none;
}

`;

export default GlobalStyles