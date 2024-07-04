import { NextSection } from "./Navigation.elements"
import Button from "../components/Button/Button"
import FormValidation from "../../FormValidation"

const Navigation = ({ currentSlideIndex, setCurrentSlideIndex, numberOfSlides, errors, setErrors, data }) => {
  const lastSlide = currentSlideIndex === numberOfSlides - 2
  const { isEmail, isPhone } = FormValidation()

  const handleNextStep = () => {
    // const fields = [data.name, data.email, data.phone]
    // let nextErrors = errors.map(({isError, message}, index) => {
    //   return fields[index] === "" ? {isError: true, message: "This field is required"} : {isError, message}
    // })
    // console.log(nextErrors)
    // setErrors(nextErrors)
    // if(!errors[0].isError && !errors[1].isError && !errors[2].isError) {
      setCurrentSlideIndex(currentSlideIndex + 1)
    // }
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