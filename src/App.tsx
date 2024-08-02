import './App.css'
import { API } from './config'
import useGetProducts from './hooks/useGetProducts'
import Product from './interfaces/product'

function App() {
    const [products, setProducts] = useGetProducts({API: API})

    return (
      <>
        {products.map((product: Product) => {
          console.log(product.name)
        })
        }
        <h1>is UP</h1>
      </>
    )
}

export default App
