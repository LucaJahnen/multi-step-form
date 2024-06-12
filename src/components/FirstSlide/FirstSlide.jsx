import { SlideWrapper, StepContainer, StepsWrapper, Step, NextSection } from "./FirstSlide.elements"
import Heading from "../components/Heading/Heading"
import Paragraph from "../components/Paragraph/Paragraph"
import InputGroup from "../components/InputGroup/InputGroup"
import Button from "../components/Button/Button"

const FirstSlide = () => {
  const handleSubmit = e => {
    e.preventDefault()
  }

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
        <form action="#" onSubmit={handleSubmit}>
          <InputGroup placeholder="e.g. Stephen King" id="name" label="Name"></InputGroup>
          <InputGroup placeholder="e. g. stephenking@lorem.com" id="email" label="Email Address"></InputGroup>
          <InputGroup placeholder="e. g. 1 234 567 890" id="email" label="Phone Number"></InputGroup>
        </form>
        <NextSection>
          <Button>Next Step</Button>
        </NextSection>
    </SlideWrapper>
  )
}

export default FirstSlide