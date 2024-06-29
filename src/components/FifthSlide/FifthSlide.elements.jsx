import styled from "styled-components"

export const ContentWrapper = styled.section`
@media (min-width: 960px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 133.3%;
}
`

export const Img = styled.img`
width: 19%;
display: block;
margin: 3rem auto 1rem auto;

@media (min-width: 960px) {
    margin: 2.7rem auto 0 auto;
}
`

export const SlideHeading = styled.h1`
text-align: center;
color: var(--marine-blue);
margin-top: 1.6rem;
font-size: 1.4rem;

@media (min-width: 960px) {
    font-size: 2rem;
    margin-top: 2rem;
}
`

export const SlideParagraph = styled.p`
text-align: center;
color: var(--cool-gray);
line-height: 1.5;
padding-bottom: 3.4rem;
margin-top: 0.6rem;

@media (min-width: 960px) {
    margin-top: 0.9rem;
}
`