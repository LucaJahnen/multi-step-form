import Background from "./components/Background/Background"
import FirstSlide from "./components/FirstSlide/FirstSlide"
import SecondSlide from "./components/SecondSlide/SecondSlide"
import ThirdSlide from "./components/ThirdSlide/ThirdSlide"
import FourthSlide from "./components/FourthSlide/FourthSlide"
import FifthSlide from "./components/FifthSlide/FifthSlide"
import Navigation from "./components/Navigation/Navigation"
import { GlobalStyle } from "./GlobalStyles"
import { useState } from "react"
import IconArcade from "./assets/images/icon-arcade.svg"
import IconAdvanced from "./assets/images/icon-advanced.svg"
import IconPro from "./assets/images/icon-pro.svg"
import SlideWrapper from "./components/components/SlideWrapper/SlideWrapper"
import { AppWrapper } from "./GlobalStyles"

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
  const updateData = newData => {
    setData(prev => {
      return { ...prev, ...newData }
    })
  }

  const slides = [
    <FirstSlide data={data} updateData={updateData} />, 
    <SecondSlide data={data} updateData={updateData} />, 
    <ThirdSlide data={data} updateData={updateData} />, 
    <FourthSlide data={data} updateData={updateData} setCurrentSlideIndex={setCurrentSlideIndex} />, 
    <FifthSlide />
  ]

  return (
    <>
    <GlobalStyle />
    <AppWrapper>
    <SlideWrapper>
    <Background currentSlideIndex={currentSlideIndex} setCurrentSlideIndex={setCurrentSlideIndex} numberOfSlides={slides.length} />
    <Navigation currentSlideIndex={currentSlideIndex} setCurrentSlideIndex={setCurrentSlideIndex} numberOfSlides={slides.length} />
    {slides[currentSlideIndex]}
    </SlideWrapper>
    </AppWrapper>
    </>
  )
}

export default App