import SlideWrapper from "../components/SlideWrapper/SlideWrapper"
import Heading from "../components/Heading/Heading"
import Paragraph from "../components/Paragraph/Paragraph"
import InputGroup from "../components/InputGroup/InputGroup"

const FirstSlide = () => {
  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <SlideWrapper>
        <Heading>Personal Info</Heading>
        <Paragraph>Please provide your name, email address and phone number.</Paragraph>
        <form action="#" onSubmit={handleSubmit}>
          <InputGroup placeholder="e.g. Stephen King" id="name" label="Name" type="text"></InputGroup>
          <InputGroup placeholder="e. g. stephenking@lorem.com" id="email" label="Email Address" type="email"></InputGroup>
          <InputGroup placeholder="e. g. 1 234 567 890" id="email" label="Phone Number" type="number"></InputGroup>
        </form>
    </SlideWrapper>
  )
}

export default FirstSlide