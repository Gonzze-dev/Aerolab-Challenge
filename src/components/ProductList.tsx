import '../css/components/ProductList.css'

import useProductContext from '../hooks/useProductContext'

import Product from '../interfaces/Product'
import ProductCard from './ProductCard'


const ProductList = () => {
  const {products} = useProductContext()

  return (
    <>
    <div className='ProductList'>
    {products.map((product: Product, index) => 
        <ProductCard key={index} 
        img={product.img} 
        _id={product._id} 
        name={product.name} 
        cost={product.cost} 
        category={product.category}/>
      )}
    </div>
      
    </>
  )
}

export default ProductList