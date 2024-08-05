import '../css/UI/ButtonUI.css'
import { ButtonHTMLAttributes} from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

function Button({className, children, ...props}: ButtonProps) {

  return (
    <button id='ButtonUI' className={className} {...props}>
        {children}
    </button>
  )
}

export default Button