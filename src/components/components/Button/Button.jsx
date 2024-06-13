import { ButtonElement } from "./Button.elements"

const Button = ({ children, onClick }) => {
  return (
    <ButtonElement onClick={onClick}>{children}</ButtonElement>
  )
}

export default Button