import './App.css'
import ProductList from './components/ProductList'
import { ProductProvider } from './providers/ProductProvider'

function App() {
    
    return (
      <ProductProvider>
        <ProductList/>
      </ProductProvider>
    )
}

export default App
