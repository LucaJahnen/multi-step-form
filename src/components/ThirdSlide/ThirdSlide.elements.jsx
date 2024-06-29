import styled from "styled-components"

export const Label = styled.label`
display: grid;
grid-template-columns: 10% 70% 20%;
align-items: center;
width: 100%;
padding: 0.7rem;
border: 1px solid ${props => props.checked ? "var(--purplish-blue)" : "var(--cool-gray)" };
background-color: ${props => props.checked ? "hsla(243, 100%, 62%, 0.1)" : "transparent" };
transition: all 0.3s ease;
border-radius: 0.4rem;
margin-top: 1rem;

@media (min-width: 960px) {
    padding: 1.4rem 0 1.4rem 1rem;
    cursor: pointer;
}
`

export const Checkbox = styled.input`
accent-color: var(--purplish-blue);
width: 1.2rem;
aspect-ratio: 1 / 1;
border-radius: 0.2rem;
`

export const TextWrapper = styled.section`
margin-left: 0.3rem;
`

export const CardHeading = styled.h2`
color: var(--marine-blue);
font-size: 1rem;
`

export const CardDesc = styled.p`
color: var(--cool-gray);
font-size: 0.8rem;
margin-top: 0.2rem;

@media (min-width: 960px) {
    font-size: 0.9rem;
}
`

export const CardPrice = styled.p`
color: var(--purplish-blue);
font-size: 0.9rem;
`