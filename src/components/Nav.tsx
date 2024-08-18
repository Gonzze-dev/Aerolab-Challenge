import '../css/components/Nav.css'
import aerolabLogoSvg from '../assets/aerolab-logo.svg'
import coinSvg from '../assets/icons/coin.svg'

import { Link} from 'react-router-dom'
import { useUserContext } from '../providers/UserProvider'
import { useMemo } from 'react'
import { API_ADD_POINTS, token } from '../config'
import useFetchP from '../hooks/useFetchP'

const reqOptions = (amount: number) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({'amount': amount})
    }
    return options
  }

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
    const {user, setUser} = useUserContext()
    
    const name = useMemo(() => {
        return user.name
    },[user.name])

    const points = useMemo(() => {
        return user.points
    },[user.points])

    const addPoints = async () => {
        const amount: number = 1000
        const newUser = {...user}
        newUser.points = newUser.points + amount

        const {loading} = await useFetchP({API: API_ADD_POINTS,  options: reqOptions(amount)})

        if (!loading) setUser(newUser)
    }

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
                <div className='NavBar-UserInfo-AddMoney-Button' onClick={addPoints}>
                    <span className='NavBar-UserInfo-addCoinSimbol'>+</span>
                    <img className='NavBar-UserInfo-MoneyImg' src={coinSvg} alt="Money of user" />
                </div> 
            </div>
           </div>
        </div>
    )
  }
  
  export default Nav