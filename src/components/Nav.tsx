import '../css/components/Nav.css'
import aerolabLogoSvg from '../assets/aerolab-logo.svg'
import coinSvg from '../assets/icons/coin.svg'
import { useMoneyContext } from '../providers/MoneyProvider'
import { Link} from 'react-router-dom'

const NavLinks = () => {
    return(
    <>
    <ul className='NavLinks'>
        <li className='NavLink'>
            <Link to='/'>Home</Link>
        </li>
        <li className='NavLink'>
            <Link to='/history'>History</Link>
        </li>
    </ul>
    </>
    )
    
}

const Nav = () => {
    const {money} = useMoneyContext()
    return (
        <div className="NavBar">
            <div className='NavBar-NavLinks-Container'>
                <img className='NavBar-AerolabIcon' src={aerolabLogoSvg} alt="Aerolab icon" />
                <NavLinks/>
            </div>
           <div className='NavBar-UserInfo'>
            <p className='NavBar-UserInfo-Name'>Gonzalo Errandonea</p>
            <div className='NavBar-UserInfo-Money-Container'>
                <p className='NavBar-UserInfo-Money'>{money}</p>
                <img className='NavBar-UserInfo-MoneyImg' src={coinSvg} alt="Money of user" />
            </div>
           </div>
        </div>
    )
  }
  
  export default Nav