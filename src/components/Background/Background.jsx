import { BackgroundWrapper, StepContainer, StepsWrapper, Step, NextSection } from "./Background.elements"
import Button from "../components/Button/Button"

const Background = ({ currentSlideIndex, setCurrentSlideIndex, numberOfSlides }) => {
  const lastSlide = currentSlideIndex === numberOfSlides - 2
  return (
    <>
    <BackgroundWrapper />
      <StepContainer>
          <StepsWrapper>
            {Array(4).fill(null).map((item, index) => {
              return <Step key={index} active={currentSlideIndex === numberOfSlides - 1 ? index === numberOfSlides - 2 : index == currentSlideIndex}>{index + 1}</Step>
            })}
          </StepsWrapper>
        </StepContainer>
    </>
  )
}

export default Background