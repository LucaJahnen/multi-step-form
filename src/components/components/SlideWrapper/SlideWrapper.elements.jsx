import styled from "styled-components"

export const SlideWrapperElement = styled.section`
background-color: white;
border-radius: 0.8rem;
margin: 26.5% 4% 0 4%;
padding: 2rem 1.5rem;

@media (min-width: 960px) {
    margin: 0;
    padding: 1.3rem 1rem;
    width: 65%;
    height: 42vw;
    display: grid;
    grid-template-columns: 30.5% auto auto;
    grid-template-rows: repeat(4, 25%);
    grid-column-gap: 11%;
}
`