import './App.css'
import ProductList from './components/ProductList'

import { ProductProvider } from './providers/ProductProvider'
import { MoneyProvider } from './providers/MoneyProvider'

function App() {
    
    return (
      <ProductProvider>
        <MoneyProvider>
          <ProductList/>
        </MoneyProvider>
      </ProductProvider>
    )
}

export default App
