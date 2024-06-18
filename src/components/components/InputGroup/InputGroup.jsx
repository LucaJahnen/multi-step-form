import { Label, Input } from "./InputGroup.element"

const InputGroup = ({ id, label, placeholder, type, value, onChange }) => {
  return (
    <>
        <Label htmlFor={id}>{label}</Label>
        <Input id={id} placeholder={placeholder} type={type} value={value} onChange={onChange} autoComplete="on" />
    </>
  )
}

export default InputGroup