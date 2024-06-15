import SlideWrapper from "../components/SlideWrapper/SlideWrapper"
import Heading from "../components/Heading/Heading"
import Paragraph from "../components/Paragraph/Paragraph"
import { ItemsWrapper, Label, Input, Img, TextWrapper, CardHeading, CardDesc, CardDiscount, PeriodWrapper, PeriodDesc, PeriodLabel, PeriodInput } from "./SecondSlide.elements"
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
  const [monthly, setMonthly] = useState(true)
  
  const handleClick = index => {
     const nextChecked = () => {
        if(index === 0) {
         return [true, false, false]
        } else if(index === 1) {
         return [false, true, false]
       } else if(index === 2) {
         return [false, false, true]
        }
      }
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
            <CardDesc>${monthly ? `${price}/mo` : `${price * 10}/yr`}</CardDesc>
            <CardDiscount visible={!monthly}>2 months free</CardDiscount>
          </TextWrapper>
          <Input type="checkbox" id={id} checked={checked[index]} onChange={() => handleClick(index)} />
        </Label>
        })}
      </ItemsWrapper>
      <PeriodWrapper>
        <PeriodDesc primary={monthly}>Monthly</PeriodDesc>
          <PeriodLabel htmlFor="period-input">
            <PeriodInput type="checkbox"id="period-input" checked={monthly} onChange={() => setMonthly(!monthly)} />
          </PeriodLabel>
        <PeriodDesc primary={!monthly}>Yearly</PeriodDesc>
      </PeriodWrapper>
    </SlideWrapper>
  )
}

export default SecondSlide