import SlideWrapper from "../components/SlideWrapper/SlideWrapper"
import Heading from "../components/Heading/Heading"
import Paragraph from "../components/Paragraph/Paragraph"
import { Label, Checkbox, TextWrapper, CardHeading, CardDesc, CardPrice } from "./ThirdSlide.elements"

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

const ThirdSlide = ({ data, updateData }) => {
    const handleClick = index => {
        const nextAddOns = data.addOns.map((item, i) => {
            if(index === i) {
                return !item
            } else {
                return item
            }
        })
        updateData({addOns: nextAddOns})
    }

  return (
    <SlideWrapper>
        <Heading>Pick add-ons</Heading>
        <Paragraph>Add-ons help enhance your gaming experience.</Paragraph>
        {Cards.map(({ title, desc, price }, index) => {
            return <Label key={title} checked={data.addOns[index]}>
            <Checkbox type="checkbox" checked={data.addOns[index]} onChange={() => handleClick(index)} />
            <TextWrapper>
                <CardHeading>{title}</CardHeading>
                <CardDesc>{desc}</CardDesc>
            </TextWrapper>
            <CardPrice>+${data.monthly ? `${price}/mo` : `${price * 10}/yr`}</CardPrice>
        </Label>
        })}
    </SlideWrapper>
  )
}

export default ThirdSlide