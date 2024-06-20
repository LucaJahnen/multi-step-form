import { NextSection } from "./Navigation.elements"
import Button from "../components/Button/Button"

const Navigation = ({ currentSlideIndex, setCurrentSlideIndex, numberOfSlides  }) => {
    const lastSlide = currentSlideIndex === numberOfSlides - 2
  return (
    <NextSection visible={!(currentSlideIndex === numberOfSlides - 1)}>
        <Button onClick={() => setCurrentSlideIndex(currentSlideIndex - 1)} visible={currentSlideIndex != 0}>Go Back</Button>
        <Button onClick={() => setCurrentSlideIndex(currentSlideIndex + 1)} primary bgColor={lastSlide ? "hsl(243, 100%, 62%)" : "hsl(213, 96%, 18%)"} visible>{lastSlide ? "Confirm": "Next Step"}</Button>
    </NextSection>
  )
}

export default Navigation