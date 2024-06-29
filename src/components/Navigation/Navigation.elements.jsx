import styled from "styled-components"

export const NextSection = styled.div`
width: 100%;
background-color: var(--white);
padding: 1rem;
display: ${props => props.visible ? "flex": "none"};
justify-content: space-between;
align-items: center;
position: absolute;
bottom: 0;
left: 0;
transform: ${props => props.visible ? "translateY(0)" : "translateY(100%)"};
transition: transform 0.6s ease;

@media (min-width: 960px) {
    position: static;
    padding: 1rem 5rem 1rem 0;
    align-items: flex-end;
    grid-area: 4 / 2 / span 1 / span 3;
}
`