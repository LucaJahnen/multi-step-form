import { Label, Input } from "./InputGroup.element"

const InputGroup = ({ id, label, placeholder, type }) => {
  return (
    <>
        <Label htmlFor={id}>{label}</Label>
        <Input id={id} placeholder={placeholder} type={type}/>
    </>
  )
}

export default InputGroup