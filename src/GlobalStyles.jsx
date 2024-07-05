import { createGlobalStyle } from "styled-components"
import styled from "styled-components"
import UbuntuBold from "./assets/fonts/Ubuntu-Bold.ttf"
import UbuntuMedium from "./assets/fonts/Ubuntu-Medium.ttf"
import UbuntuRegular from "./assets/fonts/Ubuntu-Regular.ttf"

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: "Ubuntu";
    src: url(${UbuntuRegular}) format("truetype");
    font-weight: 400;
    font-style: normal;
    font-display: block;
}

@font-face {
    font-family: "Ubuntu";
    src: url(${UbuntuMedium}) format("truetype");
    font-weight: 500;
    font-style: normal;
    font-display: block;
}

@font-face {
    font-family: "Ubuntu";
    src: url(${UbuntuBold}) format("truetype");
    font-weight: 800;
    font-style: normal;
    font-display: block;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: "Ubuntu", sans-serif;
}

:root {
    --marine-blue: hsl(213, 96%, 18%);
    --purplish-blue: hsl(243, 100%, 62%);
    --pastel-blue: hsl(228, 100%, 84%);
    --light-blue: hsl(206, 94%, 87%);
    --strawberry-red: hsl(354, 84%, 57%);
    --cool-gray: hsl(231, 11%, 63%);
    --light-gray: hsl(229, 24%, 87%);
    --magnolia: hsl(217, 100%, 97%);
    --alabaster: hsl(231, 100%, 99%);
    --white: hsl(0, 0%, 100%);
}
`

export const AppWrapper = styled.main`
@media (min-width: 960px) {
    display: grid;
    place-items: center;
    height: 100vh;
}
`