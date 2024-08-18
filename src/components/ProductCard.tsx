import '../css/components/ProductCard.css'
import buyBlue_SVG from '../assets/icons/buy-blue.svg'
import buyWhite_SVG from '../assets/icons/buy-white.svg'
import coin_SVG from '../assets/icons/coin.svg'
import Product from '../interfaces/Product'
import { useEffect, useMemo, useState } from 'react'
import Button from '../UI/Button'
import { useUserContext } from '../providers/UserProvider'

import User from '../interfaces/User'
import { usePagedProductContext } from '../providers/PagedArrayProvider'
import { API_REEDEM, token } from '../config'

import fetchData from '../utilities/fetchData'

const reqOptions = (productId: string) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({'productId': productId})
  }
  return options
}


const ProductCard = (product: Product) => { 
    const {products} = usePagedProductContext()
    const {user, setUser} = useUserContext()
    const [mouseHover, setMouseHover] = useState(false)
    const [data, setData] = useState(undefined)
    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState(null)
    
    const isBuildeable = useMemo(() => {
      return user.points >= product.cost
    },[user.points, products])

    const showBuildInfo = () =>
    {
      setMouseHover(true)
    }

    const hideBuildInfo = () =>
    {
      setMouseHover(false)
    }

    const shopProduct = async () => {
      const newUser:User = {...user}
      const dif = user.points - product.cost
      newUser.points = dif
      const {data: newData, loading: newLoading, err: newErr} = await fetchData({API: API_REEDEM,  options: reqOptions(product._id)})
      setData(newData)
      setLoading(newLoading)
      setErr(newErr)
      
      setUser(newUser)
    }

    useEffect(()=> {
      console.log(data, loading, err)
    }, [data, loading, err])
  
  return (
    <div className='ProductCard' onMouseEnter={showBuildInfo} onMouseLeave={hideBuildInfo}>
        {
          (isBuildeable && mouseHover) ?
          <div className='BuildProduct-Container'>
            <img className='buyWhite_SVG' src={buyWhite_SVG} alt="" /> 
            <span className='BuildProductInfo'>
              <p className='BuildProductInfo-cost'>{product.cost}</p>
              <img className='BuildProductInfo-Coin_SVG' src={coin_SVG} alt="coin_SVG" width={30} height={30}/>
            </span>
            <Button className='BuildProduct-button' onClick={shopProduct}>Redeem now</Button>
          </div>
          :
          null
        }
        
        <div className='ImgBuyContainer' >
          {
            !isBuildeable ? 
            <span className='coin_SVG-Container'>  
              You need {Math.abs(product.cost - user.points)}
              <img className='coin_SVG' src={coin_SVG} alt="coin_SVG" width={30} height={30}/>
            </span>
            :
             <img className='BuyBlue-SVG' src={buyBlue_SVG} alt="" /> 
          }
        </div>
        
        <img className='ProductImg' src={product.img.hdUrl} alt={`image of product ${product.name}`} width={252} height={182}/>
        <div className='ProductCard-DataContainer'>
          <p className='ProductCard-DataContainer-category'>{product.category}</p>
          <strong className='ProductCard-DataContainer-name'>{product.name}</strong>
        </div>
    </div>
  )
}

export default ProductCard