import { createGlobalStyle } from "styled-components";
import UbuntuBold from "./assets/fonts/Ubuntu-Bold.ttf"
import UbuntuMedium from "./assets/fonts/Ubuntu-Medium.ttf"
import UbuntuRegular from "./assets/fonts/Ubuntu-Regular.ttf"

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: "Ubuntu";
    font-weight: normal;
    src: url(${UbuntuBold}) format("truetype"),
    url(${UbuntuMedium}) format("truetype"),
    url(${UbuntuRegular}) format("truetype");
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Ubuntu", sans-serif;
}
`