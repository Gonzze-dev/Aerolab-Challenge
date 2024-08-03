import useProductContext from '../hooks/useProductContext'
import Product from '../interfaces/Product'

const ProductList = () => {
  const {products} = useProductContext()

  return (
    <>
    {products.map((product: Product) => {
      console.log(product.name)
    })}
    <div>
      lista
    </div>
    </>
  )
}

export default ProductList