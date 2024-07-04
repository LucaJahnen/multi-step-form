import styled from "styled-components"

export const LabelWrapper = styled.div`
display: flex;
justify-content: space-between;
margin: 1rem 0 0.2rem 0;
font-size: 0.95rem;

@media (min-width: 960px) {
    margin: 1rem 0 0.6rem 0;
}
`

export const Label = styled.label`
color: var(--marine-blue);
`

export const Error = styled.p`
color: var(--strawberry-red);
display: ${props => props.$error ? "block" : "none"};
`

export const Input = styled.input`
font-size: 1rem;
padding: 0.7rem;
outline: 1px solid ${props => props.$error ? "var(--strawberry-red)" : "var(--light-gray)"};
border-radius: 0.4rem;
border: none;
width: 100%;
font-weight: 500;
transition: all 0.4s ease;

&:focus {
    outline: 1px solid var(--purplish-blue);
}

@media (min-width: 960px) {
    margin-bottom: 0.3rem;
    padding: 0.9rem;
    cursor: pointer;
}
`