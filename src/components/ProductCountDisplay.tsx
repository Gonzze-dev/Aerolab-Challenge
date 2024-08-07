import { productsPerPage } from '../config'
import '../css/components/ProductCountDisplay.css'

import { usePageContext } from '../providers/ProductPageProvider'

import { useProductContext } from '../providers/ProductProvider'

const ProductCountDisplay = () => {
  const {products} = useProductContext()
  const {page} = usePageContext()
  const totalProducts = products.length

  const totalProductCalc = productsPerPage * page.index
  const totalProductViewed = totalProductCalc < products.length ? totalProductCalc :  products.length

  return (
    <div className='ProductCountDisplay-container'>
      <p className='ProductCountDisplay'>
        {totalProductViewed} of {totalProducts} products
      </p>
    </div>
      
  )
}

export default ProductCountDisplay