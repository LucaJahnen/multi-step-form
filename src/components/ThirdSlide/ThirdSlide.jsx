import Heading from "../components/Heading/Heading"
import Paragraph from "../components/Paragraph/Paragraph"
import { Label, Checkbox, TextWrapper, CardHeading, CardDesc, CardPrice } from "./ThirdSlide.elements"
import SlideContainer from "../components/SlideContainer/SlideContainer"

const ThirdSlide = ({ data, updateData }) => {
    const handleClick = index => {
        const nextAddOns = data.addOns.map((item, i) => {
            if(index === i) {
                return { ...item, selected: !item.selected }
            } else {
                return item
            }
        })
        updateData({addOns: nextAddOns})
    }

  return (
    <SlideContainer>
        <Heading>Pick add-ons</Heading>
        <Paragraph>Add-ons help enhance your gaming experience.</Paragraph>
        {data.addOns.map(({ title, desc, price }, index) => {
            return <Label key={title} checked={data.addOns[index].selected}>
            <Checkbox type="checkbox" checked={data.addOns[index].selected} onChange={() => handleClick(index)} name={title} />
            <TextWrapper>
                <CardHeading>{title}</CardHeading>
                <CardDesc>{desc}</CardDesc>
            </TextWrapper>
            <CardPrice>+${data.monthly ? `${price}/mo` : `${price * 10}/yr`}</CardPrice>
        </Label>
        })}
    </SlideContainer>
  )
}

export default ThirdSlide