import './App.css'

import { ProductProvider } from './providers/ProductProvider'
import { MoneyProvider } from './providers/MoneyProvider'
import { ProductPageProvider } from './providers/ProductPageProvider'
import { PagedProductProvider } from './providers/PagedArrayProvider'

import Nav from './components/Nav'
import Home from './pages/Home'

function App() {
    
    return (
      <ProductProvider>
        <MoneyProvider>
          <ProductPageProvider>
              <PagedProductProvider>
                <Nav/>
                <Home/>
              </PagedProductProvider>
            </ProductPageProvider>
        </MoneyProvider>
      </ProductProvider>
    )
}

export default App
