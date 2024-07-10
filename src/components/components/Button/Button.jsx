import { ButtonElement } from "./Button.elements"

const Button = ({ children, onClick, primary, visible, bgColor, padding, hover, hoverPrimary, type }) => {
  return (
    <ButtonElement 
      onClick={onClick} 
      $primary={primary} 
      $visible={visible} 
      $bgColor={bgColor}
      $padding={padding}
      $hover={hover}
      $hoverPrimary={hoverPrimary}
      type={type}
    >{children}</ButtonElement>
  )
}

export default Button