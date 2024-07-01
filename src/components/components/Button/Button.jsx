import { ButtonElement } from "./Button.elements"

const Button = ({ children, onClick, primary, visible, bgColor, padding }) => {
  return (
    <ButtonElement 
      onClick={onClick} 
      primary={primary} 
      visible={visible} 
      bgColor={bgColor}
      padding={padding}
    >{children}</ButtonElement>
  )
}

export default Button