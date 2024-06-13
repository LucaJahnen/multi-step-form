import { BackgroundWrapper, StepContainer, StepsWrapper, Step, NextSection } from "./Background.elements"
import Button from "../components/Button/Button"
import useForm from "../../useForm"

const Background = () => {
  const { stepIndex, increment } = useForm(Array(4).fill(null))
  return (
    <BackgroundWrapper>
      <StepContainer>
          <StepsWrapper>
            {Array(4).fill(null).map((item, index) => {
              return <Step key={index} active={index == stepIndex}>{index + 1}</Step>
            })}
          </StepsWrapper>
        </StepContainer>
        <NextSection>
          <Button onClick={increment}>Next Step</Button>
        </NextSection>
    </BackgroundWrapper>
  )
}

export default Background