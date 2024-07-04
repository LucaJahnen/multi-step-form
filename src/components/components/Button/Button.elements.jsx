import styled from "styled-components"

export const ButtonElement = styled.button`
color: ${props => props.$primary ? "white" : "var(--cool-gray)"};
padding: 0.8rem 1rem;
background-color: ${props => props.$bgColor || "transparent"};
border-radius: 0.4rem;
border: none;
font-size: 1rem;
cursor: pointer;
display: ${props => props.$visible ? "block" : "none"};

@media (min-width: 960px) {
    padding: ${props => props.$bgColor === undefined ? "0.8rem 1rem 0.8rem 0" : "0.9rem 1.7rem"};
    padding: ${props => props.$padding || "0.9rem 1.7rem"}
}
`