import Background from "./components/Background/Background"
import FirstSlide from "./components/FirstSlide/FirstSlide"
import SecondSlide from "./components/SecondSlide/SecondSlide"
import ThirdSlide from "./components/ThirdSlide/ThirdSlide"
import FourthSlide from "./components/FourthSlide/FourthSlide"
import FifthSlide from "./components/FifthSlide/FifthSlide"
import { GlobalStyle } from "./GlobalStyles"
import { useState } from "react"

const InitialData = {
  name: "",
  email: "",
  phone: "",
  planIndex: 0,
  monthly: true,
  addOns: [true, true, false]
}

function App() {
  const [monthly, setMonthly] = useState(true)
  const [data, setData] = useState(InitialData)
  const updateData = newData => {
    setData(prev => {
      return { ...prev, ...newData }
    })
  }

  return (
    <>
      <GlobalStyle />
      <Background />
      <FifthSlide data={data} updateData={updateData}/>
    </>
  )
}

export default App