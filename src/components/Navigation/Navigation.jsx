import { NextSection } from "./Navigation.elements"
import Button from "../components/Button/Button"
import FormValidation from "../../FormValidation"

const Navigation = ({ currentSlideIndex, setCurrentSlideIndex, numberOfSlides, errors, setErrors, data }) => {
  const lastSlide = currentSlideIndex === numberOfSlides - 2
  const { isEmail, isPhone } = FormValidation()

  const handleNextStep = () => {
    let nextErrors = [data.name === "", data.email === "", data.phone === ""]
    setErrors(nextErrors)
    console.log(isEmail(data.email))
    if(nextErrors[0] === false && nextErrors[1] === false && nextErrors[2] === false) {
      setCurrentSlideIndex(currentSlideIndex + 1)
    }
  }

  return (
    <NextSection visible={!(currentSlideIndex === numberOfSlides - 1)}>
        <Button 
          onClick={() => setCurrentSlideIndex(currentSlideIndex - 1)} 
          visible={currentSlideIndex != 0} padding="0.8rem 1rem 0.8rem 0"
        >Go Back</Button>
        <Button 
          onClick={handleNextStep} 
          primary 
          bgColor={lastSlide ? "hsl(243, 100%, 62%)" : "hsl(213, 96%, 18%)"} 
          visible padding={lastSlide ? "0.9rem 2.1rem" : "0.9rem 1.7rem"}
        >{lastSlide ? "Confirm": "Next Step"}</Button>
    </NextSection>
  )
}

export default Navigation