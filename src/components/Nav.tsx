import '../css/components/Nav.css'
import aerolabLogoSvg from '../assets/aerolab-logo.svg'
import coinSvg from '../assets/icons/coin.svg'
import { useMoneyContext } from '../providers/MoneyProvider'
const Nav = () => {
    const {money} = useMoneyContext()
    return (
        <div className="NavBar">
           <img className='NavBar-AerolabIcon' src={aerolabLogoSvg} alt="Aerolab icon" />
           <div className='NavBar-UserInfo'>
            <p className='NavBar-UserInfo-Name'>name</p>
            <div className='NavBar-UserInfo-Money-Container'>
                <p className='NavBar-UserInfo-Money'>{money}</p>
                <img className='NavBar-UserInfo-MoneyImg' src={coinSvg} alt="Money of user" />
            </div>
           </div>
        </div>
    )
  }
  
  export default Nav