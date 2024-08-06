import '../css/components/ProductCountDisplay.css'

import useProductContext from '../hooks/useProductContext'

const ProductCountDisplay = () => {
  const {products} = useProductContext()
  const totalProducts = products.length
  const totalProductViewd = 16

  return (
    <div className='ProductCountDisplay-container'>
      <p className='ProductCountDisplay'>
        {totalProductViewd} of {totalProducts} products
      </p>
    </div>
      
  )
}

export default ProductCountDisplay