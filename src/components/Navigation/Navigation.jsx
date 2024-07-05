import { NextSection } from "./Navigation.elements"
import Button from "../components/Button/Button"
import FormValidation from "../../FormValidation"

const Navigation = ({ currentSlideIndex, setCurrentSlideIndex, numberOfSlides, errors, setErrors, data }) => {
  const lastSlide = currentSlideIndex === numberOfSlides - 2
  const { isEmail, isPhone } = FormValidation()

  const handleNextStep = () => {
    let errors = {}
    if(data.name.length === 0) {
      errors.name = "This field is required"
    }
    if(data.email.length === 0) {
      errors.email = "This field is required"
    } else if(!isEmail(data.email)) {
      errors.email = "Invalid email address"
    }
    if(data.phone.length === 0) {
      errors.phone = "This field is required"
    } else if(!isPhone(data.phone)) {
      errors.phone = "Invalid phone number"
    }
    if(Object.keys(errors).length === 0) {
      setCurrentSlideIndex(currentSlideIndex + 1)
    }
    setErrors(errors)
  }

  return (
    <NextSection $visible={!(currentSlideIndex === numberOfSlides - 1)} $flexEnd={currentSlideIndex === 0}>
        <Button 
          onClick={() => setCurrentSlideIndex(currentSlideIndex - 1)} 
          visible={currentSlideIndex != 0}
          padding="0.8rem 1rem 0.8rem 0"
        >Go Back</Button>
        <Button 
          primary 
          visible={currentSlideIndex != 3} 
          bgColor="hsl(213, 96%, 18%)" 
          onClick={handleNextStep}
        >Next Step</Button>
        <Button 
          primary 
          visible={currentSlideIndex === 3} 
          bgColor="hsl(243, 100%, 62%)" 
          onClick={handleNextStep} 
          padding="0.9rem 2.1rem"
        >Confirm</Button>
    </NextSection>
  )
}

export default Navigation