import styled from "styled-components"
import bgImage from "../../assets/images/bg-sidebar-mobile.svg"
import bgImageDesktop from "../../assets/images/bg-sidebar-desktop.svg"

export const BackgroundWrapper = styled.div`
background-color: var(--magnolia);
width: 100%;
height: 100%;
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

@media (min-width: 960px) {
    position: relative;
    z-index: 999;
    border-radius: 0.4rem;
    background-image: url(${bgImageDesktop});
    grid-area: 1 / 1 / span 4 / span 1;
    padding: 2.4rem 2rem;
}
`

export const StepsWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
gap: 1rem;

@media (min-width: 960px) {
    flex-direction: column;
    gap: 2rem;
}
`

export const Step = styled.section`
display: flex;
flex-direction: row;
gap: 0.9rem;
`

export const Icon = styled.p`
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

export const TextWrapper = styled.div`
@media (max-width: 960px) {
    display: none;
}
`

export const Desc = styled.p`
color: var(--white);
font-size: 0.8rem;
text-transform: uppercase;
`

export const Heading = styled.h2`
color: var(--white);
font-size: 1rem;
text-transform: uppercase;
`