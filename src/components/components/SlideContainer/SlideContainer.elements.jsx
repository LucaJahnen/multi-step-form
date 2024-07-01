import styled from "styled-components"

export const SlideContainerElement = styled.section`
@media (min-width: 960px) {
    grid-area: 1 / 2 / span 3 / span 3;
    padding: ${props => props.noPadding ? "0 5rem 0 0" : "2.4rem 5rem 0 0"};
}
`