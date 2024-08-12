import '../css/components/Nav.css'
import aerolabLogoSvg from '../assets/aerolab-logo.svg'
import coinSvg from '../assets/icons/coin.svg'

import { Link} from 'react-router-dom'
import { useUserContext } from '../providers/UserProvider'
import { useMemo } from 'react'

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
    const {user} = useUserContext()
    const name = useMemo(() => {
        return user.name
    },[user.name])

    const points = useMemo(() => {
        return user.points
    },[user.points])

    return (
        <div className="NavBar">
            <div className='NavBar-NavLinks-Container'>
                <img className='NavBar-AerolabIcon' src={aerolabLogoSvg} alt="Aerolab icon" />
                <NavLinks/>
            </div>
           <div className='NavBar-UserInfo'>
            <p className='NavBar-UserInfo-Name'>{name ?? 'name'}</p>
            <div className='NavBar-UserInfo-Money-Container'>
                <p className='NavBar-UserInfo-Money'>{points}</p>
                <img className='NavBar-UserInfo-MoneyImg' src={coinSvg} alt="Money of user" />
            </div>
           </div>
        </div>
    )
  }
  
  export default Nav