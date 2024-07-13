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
transition: all 0.4s ease;
font-weight: 500;

@media (min-width: 960px) {
    padding: ${props => props.$padding || "0.9rem 1.7rem"};

    &:hover {
        color: ${props => props.$hover ? "var(--marine-blue)" : props.$primary ? "white": "var(--cool-gray)"};
        background-color: ${props => props.$hoverPrimary ? "hsl(243, 100%, 75%)" : props.$bgColor};
    }

    &:focus-visible {
        color: ${props => props.$hover ? "var(--marine-blue)" : props.$primary ? "white": "var(--cool-gray)"};
        background-color: ${props => props.$hoverPrimary ? "hsl(243, 100%, 75%)" : props.$bgColor};
    }
}
`