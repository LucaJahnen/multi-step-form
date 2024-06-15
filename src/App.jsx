import Background from "./components/Background/Background"
import FirstSlide from "./components/FirstSlide/FirstSlide"
import SecondSlide from "./components/SecondSlide/SecondSlide"
import { GlobalStyle } from "./GlobalStyles"

function App() {

  return (
    <>
      <GlobalStyle />
      <Background />
      <SecondSlide />
    </>
  )
}

export default App
