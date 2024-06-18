import { ButtonElement } from "./Button.elements"

const Button = ({ children, onClick, primary, visible, bgColor }) => {
  return (
    <ButtonElement onClick={onClick} primary={primary} visible={visible} bgColor={bgColor}>{children}</ButtonElement>
  )
}

export default Button