import { SlideWrapper, StepContainer, StepsWrapper, Step } from "./FirstSlide.elements"
import Heading from "../components/Heading/Heading"

const FirstSlide = () => {
  return (
    <SlideWrapper>
        <StepContainer>
          <StepsWrapper>
            {Array(4).fill("").map((item, index) => {
              return <Step>{index + 1}</Step>
            })}
          </StepsWrapper>
        </StepContainer>
        <Heading text="Personal Info" />
    </SlideWrapper>
  )
}

export default FirstSlide