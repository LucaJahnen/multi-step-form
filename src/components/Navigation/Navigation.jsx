import { NextSection } from "./Navigation.elements"
import Button from "../components/Button/Button"

const Navigation = ({ currentSlideIndex, setCurrentSlideIndex, numberOfSlides, errors, setErrors, data }) => {

  return (
    <NextSection $visible={!(currentSlideIndex === numberOfSlides - 1)} $flexEnd={currentSlideIndex === 0}>
        <Button 
          onClick={() => setCurrentSlideIndex(currentSlideIndex - 1)} 
          visible={currentSlideIndex != 0}
          padding="0.8rem 1rem 0.8rem 0"
          hover
          type="button"
        >Go Back</Button>
        <Button 
          primary 
          visible={currentSlideIndex != 3} 
          bgColor="hsl(213, 96%, 18%)" 
        >Next Step</Button>
        <Button 
          primary 
          visible={currentSlideIndex === 3} 
          bgColor="hsl(243, 100%, 62%)" 
          padding="0.9rem 2.1rem"
          hoverPrimary
        >Confirm</Button>
    </NextSection>
  )
}

export default Navigation