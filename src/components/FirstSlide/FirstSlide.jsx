import SlideWrapper from "../components/SlideWrapper/SlideWrapper"
import Heading from "../components/Heading/Heading"
import Paragraph from "../components/Paragraph/Paragraph"
import InputGroup from "../components/InputGroup/InputGroup"

const FirstSlide = ({ data, updateData }) => {
  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <SlideWrapper>
        <Heading>Personal Info</Heading>
        <Paragraph>Please provide your name, email address and phone number.</Paragraph>
        <form action="#" onSubmit={handleSubmit}>
          <InputGroup placeholder="e.g. Stephen King" id="name" label="Name" type="text" value={data.name} onChange={e => updateData({name : e.target.value})} />
          <InputGroup placeholder="e. g. stephenking@lorem.com" id="email" label="Email Address" type="email" value={data.email} onChange={e => updateData({email : e.target.value})} />
          <InputGroup placeholder="e. g. 1 234 567 890" id="phone" label="Phone Number" type="number" value={data.phone} onChange={e => updateData({phone : e.target.value})} />
        </form>
    </SlideWrapper>
  )
}

export default FirstSlide