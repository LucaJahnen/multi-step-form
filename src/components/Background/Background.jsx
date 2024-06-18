import { BackgroundWrapper, StepContainer, StepsWrapper, Step, NextSection } from "./Background.elements"
import Button from "../components/Button/Button"

const Background = ({ currentSlideIndex, setCurrentSlideIndex, numberOfSlides }) => {
  const lastSlide = currentSlideIndex === numberOfSlides - 2
  return (
    <BackgroundWrapper>
      <StepContainer>
          <StepsWrapper>
            {Array(4).fill(null).map((item, index) => {
              return <Step key={index} $active={index == currentSlideIndex}>{index + 1}</Step>
            })}
          </StepsWrapper>
        </StepContainer>
        <NextSection visible={!(currentSlideIndex === numberOfSlides - 1)}>
          <Button onClick={() => setCurrentSlideIndex(currentSlideIndex - 1)} visible={currentSlideIndex != 0}>Go Back</Button>
          <Button onClick={() => setCurrentSlideIndex(currentSlideIndex + 1)} primary bgColor={lastSlide ? "hsl(243, 100%, 62%)" : "hsl(213, 96%, 18%)"} visible>{lastSlide ? "Confirm": "Next Step"}</Button>
        </NextSection>
    </BackgroundWrapper>
  )
}

export default Background