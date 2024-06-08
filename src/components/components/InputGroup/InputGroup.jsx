import { Label, Input } from "./InputGroup.element"

const InputGroup = ({ id, label, placeholder }) => {
  return (
    <>
        <Label htmlFor={id}>{label}</Label>
        <Input id={id} placeholder={placeholder} />
    </>
  )
}

export default InputGroup