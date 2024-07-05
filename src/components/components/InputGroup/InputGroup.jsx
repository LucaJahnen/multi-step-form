import { LabelWrapper, Label, Error, Input } from "./InputGroup.element"

const InputGroup = ({ id, label, error, placeholder, type, value, onChange, errorMsg }) => {
  return (
    <>
        <LabelWrapper>
          <Label htmlFor={id}>{label}</Label>
          <Error $error={error}>{errorMsg}</Error>
        </LabelWrapper>
        <Input id={id} placeholder={placeholder} type={type} value={value} onChange={onChange} autoComplete="on" $error={error} />
    </>
  )
}

export default InputGroup