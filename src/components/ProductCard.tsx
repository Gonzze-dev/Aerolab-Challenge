import '../css/components/ProductCard.css'
import buyBlue_SVG from '../assets/icons/buy-blue.svg'
import buyWhite_SVG from '../assets/icons/buy-white.svg'
import coin_SVG from '../assets/icons/coin.svg'
import Product from '../interfaces/Product'
import { useEffect, useState } from 'react'
import { useMoneyContext } from '../providers/MoneyProvider' 
import Button from '../UI/Button'

const ProductCard = (product: Product) => { 
    const {money, setMoney} = useMoneyContext()
    const [isBuildeable, setIsBuildeable] = useState(money >= product.cost)
    const [mouseHover, setMouseHover] = useState(false)

    const showBuildInfo = () =>
    {
      setMouseHover(true)
    }

    const hideBuildInfo = () =>
    {
      setMouseHover(false)
    }

    

    const shopProduct = () => {
      const dif = money - product.cost
      console.log(product)
      setMoney(dif)
    }

    useEffect(() => {
      
      const buildeable = money >= product.cost

      setIsBuildeable(buildeable)
    }, [money])
  
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
              You need {product.cost - money} 
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