import '../css/components/PurchasedProduct.css'
import coinSvg from '../assets/icons/coin.svg'

import Product from '../interfaces/Product'

const PurchasedProduct = (product: Product) => {
  return (
    <div className='PurchasedProduct'>
        <div className='PurchasedProduct-Container'>
          <img className='PurchasedProduct-Img' src={product.img.hdUrl} alt={`image product ${product.name}`} width={252} height={182}/>
          <div className='PurchasedProduct-Info'>
            <p className='PurchasedProduct-Info-Category'>{product.category}</p>
            <strong className='PurchasedProduct-Info-Name'>{product.name}</strong>
          </div>
        </div>
       
        <div className='PurchasedProduct-Info-Cost-Container'>
                <img src={coinSvg} alt={`Cost of order ${product.name}`}  />
                <p className='PurchasedProduct-Info-Cost'>{product.cost}</p>
            </div>
    </div>
  )
}

export default PurchasedProduct