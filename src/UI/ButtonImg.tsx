import '../css/UI/ButtonNexPage.css'

import { ButtonHTMLAttributes, DetailedHTMLProps, ImgHTMLAttributes} from 'react'

interface ButtonImgProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  imgProps: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
}
function ButtonImg({imgProps, ...props}: ButtonImgProps) {

  return (
    <button id='ButtonPage' {...props}>
        <img {...imgProps}/>
    </button>
  )
}

export default ButtonImg