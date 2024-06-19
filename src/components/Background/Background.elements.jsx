import styled from "styled-components"
import bgImage from "../../assets/images/bg-sidebar-mobile.svg"

export const BackgroundWrapper = styled.div`
background-color: var(--magnolia);
width: 100%;
height: 100vh;
position: absolute;
top: 0;
left: 0;
z-index: -1;
`

export const StepContainer = styled.div`
background-image: url(${bgImage});
background-repeat: no-repeat;
background-size: 100%;
width: 100%;
padding: 2rem 0 5.5rem 0;
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
border-radius: 50%;
border: 1px solid white;
width: 2rem;
height: 2rem;
display: grid;
place-items: center;
background-color: ${props => props.active ? "hsl(206, 94%, 87%)" : "transparent"};
color: ${props => props.active ? "hsl(213, 96%, 18%)" : "white"};
transition: all 0.4s ease;
font-weight: 500;
`

export const NextSection = styled.div`
width: 100%;
background-color: var(--white);
padding: 1rem;
display: flex;
justify-content: space-between;
position: absolute;
bottom: 0;
left: 0;
transform: ${props => props.visible ? "translateY(0)" : "translateY(100%)"};
transition: transform 0.6s ease;
`