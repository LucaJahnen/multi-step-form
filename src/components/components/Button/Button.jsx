import { ButtonElement } from "./Button.elements"

const Button = ({ children, onClick, primary, visible }) => {
  return (
    <ButtonElement onClick={onClick} primary={primary} visible={visible}>{children}</ButtonElement>
  )
}

export default Button