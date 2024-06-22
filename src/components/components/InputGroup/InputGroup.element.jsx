import styled from "styled-components"

export const Label = styled.label`
display: block;
margin: 1rem 0 0.2rem 0;
font-size: 0.95rem;
color: var(--marine-blue);

@media (min-width: 960px) {
    margin: 1rem 0 0.6rem 0;
}
`

export const Input = styled.input`
font-size: 1rem;
padding: 0.7rem;
border: 1px solid var(--light-gray);
border-radius: 0.4rem;
width: 100%;
font-weight: 500;

&:focus {
    outline: 1px solid var(--purplish-blue);
}

@media (min-width: 960px) {
    margin-bottom: 0.3rem;
    padding: 0.9rem;
    cursor: pointer;
}
`