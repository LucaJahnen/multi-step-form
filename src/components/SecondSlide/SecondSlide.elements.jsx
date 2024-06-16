import styled from "styled-components"

export const ItemsWrapper = styled.div`
margin: 1rem 0;
display: flex;
flex-direction: column;
gap: 0.6rem;
`

export const Label = styled.label`
display: flex;
align-items: flex-start;
width: 100%;
padding: 0.75rem;
border: 1px solid ${props => props.checked ? "var(--purplish-blue)" : "var(--cool-gray)" };
background-color: ${props => props.checked ? "hsla(243, 100%, 62%, 0.1)" : "transparent" };
transition: all 0.3s ease;
border-radius: 0.4rem;
`

export const Input = styled.input`
display: none;
`

export const Img = styled.img`

`

export const TextWrapper = styled.section`
margin-left: 1.1rem;
`

export const CardHeading = styled.h2`
color: var(--marine-blue);
font-size: 1.1rem;
`

export const CardDesc = styled.p`
color: var(--cool-gray);
margin-top: 0.3rem;
`

export const CardDiscount = styled.p`
color: var(--marine-blue);
font-size: 0.9rem;
margin-top: 0.3rem;
`

export const PeriodWrapper = styled.div`
display: flex;
justify-content: center;
gap: 1rem;
background-color: hsla(213, 96%, 18%, 0.1);
padding: 0.7rem;
border-radius: 0.4rem;
margin-top: 1rem;
`

export const PeriodDesc = styled.p`
color: ${props => props.primary ? "var(--marine-blue)" : "var(--cool-gray)"};
font-weight: 500;
transition: all 0.4s ease;
`

export const PeriodLabel = styled.label`
padding: 0.7rem 1.4rem;
background-color: var(--marine-blue);
border-radius: 3rem;
position: relative;
height: 0;
width: 0;
`

export const PeriodInput = styled.input`
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
width: 1rem;
height: 1rem;
background-color: white;
border-radius: 50%;
position: absolute;
top: 50%;
left: 0.2rem;
transform: ${props => props.checked ? "translate(0, -50%)" : "translate(1.4rem, -50%)"};
transition: all 0.4s ease;
`