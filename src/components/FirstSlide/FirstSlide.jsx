import { SlideWrapper, StepContainer, StepsWrapper, Step } from "./FirstSlide.elements"
import Heading from "../components/Heading/Heading"
import Paragraph from "../components/Paragraph/Paragraph"
import InputGroup from "../components/InputGroup/InputGroup"

const FirstSlide = () => {
  return (
    <SlideWrapper>
        <StepContainer>
          <StepsWrapper>
            {Array(4).fill("").map((item, index) => {
              return <Step key={index} active={index == 0}>{index + 1}</Step>
            })}
          </StepsWrapper>
        </StepContainer>
        <Heading>Personal Info</Heading>
        <Paragraph>Please provide your name, email address and phone number.</Paragraph>
        <InputGroup placeholder="e.g. Stephen King" id="name" label="Name"></InputGroup>
    </SlideWrapper>
  )
}

export default FirstSlide