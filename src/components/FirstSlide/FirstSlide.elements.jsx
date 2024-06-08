import styled from "styled-components";
import bgImage from "../../assets/images/bg-sidebar-mobile.svg"

export const SlideWrapper = styled.section`
background-color: white;
border-radius: 0.8rem;
margin: 30% 5% 0 5%;
`

export const StepContainer = styled.div`
background-image: url(${bgImage});
background-repeat: no-repeat;
background-size: 100%;
width: 100%;
padding: 5rem 0;
position: absolute;
top: 0;
left: 0;
z-index: -1;
`

export const StepsWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
gap: 1rem;
`

export const Step = styled.p`
color: white;
border-radius: 50%;
border: 1px solid white;
width: 2rem;
height: 2rem;
display: grid;
place-items: center;
`