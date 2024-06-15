import SlideWrapper from "../components/SlideWrapper/SlideWrapper"
import Heading from "../components/Heading/Heading"
import Paragraph from "../components/Paragraph/Paragraph"
import { ItemsWrapper, Label, Input, Img, TextWrapper, CardHeading, CardDesc } from "./SecondSlide.elements"
import IconArcade from "../../assets/images/icon-arcade.svg"
import IconAdvanced from "../../assets/images/icon-advanced.svg"
import IconPro from "../../assets/images/icon-pro.svg"
import { useState } from "react"

const Card = [
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
]

const SecondSlide = () => {
  const [checked, setChecked] = useState(true)
  return (
    <SlideWrapper>
      <Heading>Select your plan</Heading>
      <Paragraph>You have the option of monthly or yearly billing.</Paragraph>
      <ItemsWrapper>
        <Label htmlFor="arcade" checked={checked}>
          <Img src={IconArcade} />
          <TextWrapper>
            <CardHeading>Arcade</CardHeading>
            <CardDesc>$9/mo</CardDesc>
          </TextWrapper>
          <Input type="checkbox" id="arcade" checked={checked} onClick={() => setChecked(!checked)}></Input>
        </Label>
      </ItemsWrapper>
    </SlideWrapper>
  )
}

export default SecondSlide