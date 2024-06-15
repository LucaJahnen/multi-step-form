import SlideWrapper from "../components/SlideWrapper/SlideWrapper"
import Heading from "../components/Heading/Heading"
import Paragraph from "../components/Paragraph/Paragraph"
import { ItemsWrapper, Label, Input, Img, TextWrapper, CardHeading, CardDesc } from "./SecondSlide.elements"
import IconArcade from "../../assets/images/icon-arcade.svg"
import IconAdvanced from "../../assets/images/icon-advanced.svg"
import IconPro from "../../assets/images/icon-pro.svg"
import { useState } from "react"

const Cards = [
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
  const [checked, setChecked] = useState([true, false, false])
  const handleClick = index => {
    const nextChecked = checked.map((checked, i) => {
      if(index === i) {
        return !checked
      } else {
        return checked
      }
    })
    setChecked(nextChecked)
  }

  return (
    <SlideWrapper>
      <Heading>Select your plan</Heading>
      <Paragraph>You have the option of monthly or yearly billing.</Paragraph>
      <ItemsWrapper>
        {Cards.map(({ src, id, price, heading }, index) => {
          return <Label htmlFor={id} checked={checked[index]} key={heading}>
          <Img src={src} />
          <TextWrapper>
            <CardHeading>{heading}</CardHeading>
            <CardDesc>${price}/mo</CardDesc>
          </TextWrapper>
          <Input type="checkbox" id={id} checked={checked[index]} onClick={() => handleClick(index)} />
        </Label>
        })}
      </ItemsWrapper>
    </SlideWrapper>
  )
}

export default SecondSlide