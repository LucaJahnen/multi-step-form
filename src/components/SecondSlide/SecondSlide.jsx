import Heading from "../components/Heading/Heading"
import Paragraph from "../components/Paragraph/Paragraph"
import { ItemsWrapper, Label, Input, Img, TextWrapper, CardHeading, CardDesc, CardDiscount, PeriodWrapper, PeriodDesc, PeriodLabel, PeriodInput } from "./SecondSlide.elements"
import SlideContainer from "../components/SlideContainer/SlideContainer"
import { useState } from "react"

const SecondSlide = ({ data, updateData }) => {
  const [focused, setFocused] = useState([false, false, false]) 
  const handleFocusChange = index => {
    const nextFocused = focused.map((item, i) => {
      if(i === index) {
        return !item
      } else {
        return item
      }
    })
    setFocused(nextFocused)
  }

  return (
    <SlideContainer>
      <Heading>Select your plan</Heading>
      <Paragraph>You have the option of monthly or yearly billing.</Paragraph>
      <ItemsWrapper>
        {data.plans.map(({ src, id, price, heading }, index) => {
          return (
          <Label htmlFor={id} checked={data.planIndex === index} key={heading} $focus={focused[index]}>
            <Img src={src} alt="" role="presentation" />
            <TextWrapper>
              <CardHeading>{heading}</CardHeading>
              <CardDesc>${data.monthly ? `${price}/mo` : `${price * 10}/yr`}</CardDesc>
              {!data.monthly && <CardDiscount>2 months free</CardDiscount>}
            </TextWrapper>
            <Input 
              type="checkbox" 
              id={id} checked={data.planIndex === index}
              onChange={() => updateData({planIndex: index})}
              onFocus={() => handleFocusChange(index)}
              onBlur={() => handleFocusChange(index)}
            />
          </Label>
          )
        })}
      </ItemsWrapper>
      <PeriodWrapper>
        <PeriodDesc $primary={data.monthly}>Monthly</PeriodDesc>
          <PeriodLabel htmlFor="period-input">
            <PeriodInput type="checkbox"id="period-input" checked={data.monthly} onChange={() => updateData({ monthly: !data.monthly})} />
          </PeriodLabel>
        <PeriodDesc $primary={!data.monthly}>Yearly</PeriodDesc>
      </PeriodWrapper>
    </SlideContainer>
  )
}

export default SecondSlide