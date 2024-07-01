import Heading from "../components/Heading/Heading"
import Paragraph from "../components/Paragraph/Paragraph"
import InputGroup from "../components/InputGroup/InputGroup"
import SlideContainer from "../components/SlideContainer/SlideContainer"

const FirstSlide = ({ data, updateData, errors, setErrors }) => {

  return (
    <SlideContainer>
        <Heading>Personal Info</Heading>
        <Paragraph>Please provide your name, email address and phone number.</Paragraph>
        <div>
          <InputGroup 
            placeholder="e.g. Stephen King" 
            id="name" label="Name" 
            type="text" 
            value={data.name} 
            onChange={e => {updateData({name: e.target.value}); setErrors([false, errors[1], errors[2]])}}
            error={errors[0].isError}
          />
          <InputGroup 
            placeholder="e. g. stephenking@lorem.com" 
            id="email" 
            label="Email Address" 
            type="email" 
            value={data.email} 
            onChange={e => {updateData({email: e.target.value}); setErrors([errors[0], false, errors[2]])}}
            error={errors[1].isError}
          />
          <InputGroup 
            placeholder="e. g. +1 234 567 890" 
            id="phone" 
            label="Phone Number" 
            type="tel" 
            value={data.phone}
            onChange={e => {updateData({phone: e.target.value}); setErrors([errors[0], errors[1], false])}}
            error={errors[2].isError}
          />
        </div>
    </SlideContainer>
  )
}

export default FirstSlide