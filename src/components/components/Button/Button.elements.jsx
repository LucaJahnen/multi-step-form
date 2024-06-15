import styled from "styled-components"

export const ButtonElement = styled.button`
color: ${props => props.primary ? "white" : "var(--cool-gray)"};
padding: 0.8rem 1rem;
background-color: ${props => props.primary ? "var(--marine-blue)" : "transparent"};
border-radius: 0.4rem;
border: none;
font-size: 1rem;
cursor: pointer;
visibility: ${props => props.visible ? "visible" : "hidden"};
`