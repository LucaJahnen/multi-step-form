import styled from "styled-components"

export const ItemsWrapper = styled.div`
margin: 1rem 0;
display: flex;
flex-direction: column;
gap: 1rem;
`

export const Label = styled.label`
display: block;
width: 100%;
padding: 1rem;
border: 1px solid ${props => props.checked ? "var(--purplish-blue)" : "var(--cool-gray)" };
background-color: ${props => props.checked ? "hsla(243, 100%, 62%, 0.1)" : "transparent" };
transition: all 0.3s ease;
border-radius: 0.4rem;
display: flex;
cursor: pointer;
`

export const Input = styled.input`
display: none;
`

export const Img = styled.img`

`

export const TextWrapper = styled.section`
margin-left: 1rem;
`

export const CardHeading = styled.h2`
color: var(--marine-blue);
font-size: 1.1rem;
`

export const CardDesc = styled.p`
color: var(--cool-gray);
margin-top: 0.3rem;
`