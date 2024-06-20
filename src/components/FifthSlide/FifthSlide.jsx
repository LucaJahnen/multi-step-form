import { Img, SlideHeading, SlideParagraph } from "./FifthSlide.elements"
import Icon from "../../assets/images/icon-thank-you.svg"

const FifthSlide = () => {
  return (
    <>
        <Img src={Icon} />
        <SlideHeading>Thank you!</SlideHeading>
        <SlideParagraph>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</SlideParagraph>
    </>
  )
}

export default FifthSlide