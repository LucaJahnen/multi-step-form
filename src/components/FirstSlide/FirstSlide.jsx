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
            onChange={e => {updateData({name: e.target.value}); delete errors.name}}
            error={errors.name != undefined}
            errorMsg={errors.name}
          />
          <InputGroup 
            placeholder="e. g. stephenking@lorem.com" 
            id="email" 
            label="Email Address" 
            type="email" 
            value={data.email} 
            onChange={e => {updateData({email: e.target.value}); delete errors.email}}
            error={errors.email != undefined}
            errorMsg={errors.email}
          />
          <InputGroup 
            placeholder="e. g. +1 234 567 890" 
            id="phone" 
            label="Phone Number" 
            type="tel" 
            value={data.phone}
            onChange={e => {updateData({phone: e.target.value}); delete errors.phone}}
            error={errors.phone != undefined}
            errorMsg={errors.phone}
          />
        </div>
    </SlideContainer>
  )
}

export default FirstSlide