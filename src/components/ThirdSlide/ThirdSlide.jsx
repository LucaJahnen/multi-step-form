import SlideWrapper from "../components/SlideWrapper/SlideWrapper"
import Heading from "../components/Heading/Heading"
import Paragraph from "../components/Paragraph/Paragraph"
import { Label, Checkbox, TextWrapper, CardHeading, CardDesc, CardPrice } from "./ThirdSlide.elements"
import { useState, useContext } from "react"
import { PeriodContext } from "../../App"

const Cards = [
    {
        title: "Online service",
        desc: "Access to multiplayer games",
        price: 1
    },
    {
        title: "Larger storage",
        desc: "Extra 1TB of cloud save",
        price: 2
    },
    {
        title: "Customizable profile",
        desc: "Custom theme on your Profile",
        price: 2
    }
]

const ThirdSlide = () => {
    const [checked, setChecked] = useState([true, true, false])
    const { monthly, setMonthly } = useContext(PeriodContext)
    const handleClick = index => {
        const nextChecked = checked.map((item, i) => {
            if(index === i) {
                return !item
            } else {
                return item
            }
        })
        setChecked(nextChecked)
    }

  return (
    <SlideWrapper>
        <Heading>Pick add-ons</Heading>
        <Paragraph>Add-ons help enhance your gaming experience.</Paragraph>
        {Cards.map(({ title, desc, price }, index) => {
            return <Label key={title} checked={checked[index]}>
            <Checkbox type="checkbox" checked={checked[index]} onChange={() => handleClick(index)} />
            <TextWrapper>
                <CardHeading>{title}</CardHeading>
                <CardDesc>{desc}</CardDesc>
            </TextWrapper>
            <CardPrice>+${monthly ? `${price}/mo` : `${price * 10}/yr`}</CardPrice>
        </Label>
        })}
    </SlideWrapper>
  )
}

export default ThirdSlide