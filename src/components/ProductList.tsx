import { useEffect } from 'react'
import '../css/components/ProductList.css'


import Product from '../interfaces/Product'
import { usePagedProductContext } from '../providers/PagedArrayProvider'
import ProductCard from './ProductCard'


const ProductList = () => {
  const {products, loading} = usePagedProductContext()

  useEffect(() => console.log(products), [loading])
  return (
    <>
    {loading ?
      <div>Cargando...</div>
      :
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
    }
    
      
    </>
  )
}

export default ProductList