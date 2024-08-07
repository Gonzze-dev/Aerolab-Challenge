import '../css/components/ProductFooter.css'

import PrevNextPage from './PrevNextPage'
import ProductCountDisplay from './ProductCountDisplay'

const ProductFooter = () => {

  return (
    <div className='ProductFooter-Container'>
        <ProductCountDisplay/>
        <PrevNextPage/>
    </div>
      
  )
}

export default ProductFooter