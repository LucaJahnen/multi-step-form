import { GlobalStyle } from "./GlobalStyles"
import { useState } from "react"
import IconArcade from "/images/icon-arcade.svg"
import IconAdvanced from "/images/icon-advanced.svg"
import IconPro from "/images/icon-pro.svg"
import SlideWrapper from "./components/components/SlideWrapper/SlideWrapper"
import { AppWrapper } from "./GlobalStyles"
import { FirstSlide, SecondSlide, ThirdSlide, FourthSlide, FifthSlide, Navigation, Background } from "./components"

const InitialData = {
  name: "",
  email: "",
  phone: "",
  planIndex: 0,
  plans: [
    {
      src: IconArcade,
      id: "arcade",
      price: 9,
      heading: "Arcade"
    },
    {
      src: IconAdvanced,
      id: "advanced",
      price: 12,
      heading: "Advanced"
    },
    {
      src: IconPro,
      id: "pro",
      price: 15,
      heading: "Pro"
    }
  ],
  monthly: true,
  addOns: [
    {
      title: "Online service",
      desc: "Access to multiplayer games",
      price: 1,
      selected: true
  },
  {
      title: "Larger storage",
      desc: "Extra 1TB of cloud save",
      price: 2,
      selected: true
  },
  {
      title: "Customizable profile",
      desc: "Custom theme on your Profile",
      price: 2,
      selected: false
  }
  ]
}

function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const [data, setData] = useState(InitialData)
  const [errors, setErrors] = useState({})
  const updateData = newData => {
    setData(prev => {
      return { ...prev, ...newData }
    })
  }

  const slides = [
    <FirstSlide data={data} updateData={updateData} errors={errors} currentSlideIndex={currentSlideIndex} />, 
    <SecondSlide data={data} updateData={updateData} />, 
    <ThirdSlide data={data} updateData={updateData} />, 
    <FourthSlide data={data} updateData={updateData} setCurrentSlideIndex={setCurrentSlideIndex} />, 
    <FifthSlide />
  ]

  return (
    <>
    <GlobalStyle />
    <AppWrapper onSubmit={e => e.preventDefault()}>
      <SlideWrapper>
        <Background currentSlideIndex={currentSlideIndex} setCurrentSlideIndex={setCurrentSlideIndex} numberOfSlides={slides.length} />
        <Navigation currentSlideIndex={currentSlideIndex} setCurrentSlideIndex={setCurrentSlideIndex} numberOfSlides={slides.length} errors={errors} setErrors={setErrors} data={data} />
        {slides[currentSlideIndex]}
      </SlideWrapper>
    </AppWrapper>
    </>
  )
}

export default App