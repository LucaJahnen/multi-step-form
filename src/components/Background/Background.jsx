import { BackgroundWrapper, StepContainer, StepsWrapper, Step, Icon, TextWrapper, Desc, Heading } from "./Background.elements"

const Steps = ["Your Info", "Select Plan", "Add-Ons", "Summary"]


const Background = ({ currentSlideIndex, setCurrentSlideIndex, numberOfSlides }) => {
  const lastSlide = currentSlideIndex === numberOfSlides - 2
  return (
    <>
    <BackgroundWrapper />
      <StepContainer>
          <StepsWrapper>
            {Steps.map((item, index) => {
              return <Step key={item}>
                <Icon $active={currentSlideIndex === numberOfSlides - 1 ? index === numberOfSlides - 2 : index == currentSlideIndex}>{index + 1}</Icon>
                <TextWrapper>
                  <Desc>Step {index + 1}</Desc>
                  <Heading>{item}</Heading>
                </TextWrapper>
              </Step>
            })}
          </StepsWrapper>
        </StepContainer>
    </>
  )
}

export default Background