import Background from "./components/Background/Background"
import FirstSlide from "./components/FirstSlide/FirstSlide"
import SecondSlide from "./components/SecondSlide/SecondSlide"
import { GlobalStyle } from "./GlobalStyles"
import { createContext, useState } from "react"

export const PeriodContext = createContext()

function App() {
  const [monthly, setMonthly] = useState(true)

  return (
    <PeriodContext.Provider value={{ monthly, setMonthly }}>
      <GlobalStyle />
      <Background />
      <SecondSlide />
    </PeriodContext.Provider>
  )
}

export default App