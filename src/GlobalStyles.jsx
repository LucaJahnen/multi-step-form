import { createGlobalStyle } from "styled-components";
import UbuntuBold from "./assets/fonts/Ubuntu-Bold.ttf"
import UbuntuMedium from "./assets/fonts/Ubuntu-Medium.ttf"
import UbuntuRegular from "./assets/fonts/Ubuntu-Regular.ttf"

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: "Ubuntu";
    src: url(${UbuntuRegular}) format("truetype");
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: "Ubuntu";
    src: url(${UbuntuMedium}) format("truetype");
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: "Ubuntu";
    src: url(${UbuntuBold}) format("truetype");
    font-weight: 800;
    font-style: normal;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Ubuntu", sans-serif;
}
`