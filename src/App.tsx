import './App.css'

import { ProductProvider } from './providers/ProductProvider'
import { MoneyProvider } from './providers/MoneyProvider'
import { ProductPageProvider } from './providers/ProductPageProvider'
import { PagedProductProvider } from './providers/PagedArrayProvider'

import Nav from './components/Nav'
import Home from './pages/Home'
import History from './pages/History'

function App() {
    
    return (
      <ProductProvider>
        <MoneyProvider>
          <ProductPageProvider>
              <PagedProductProvider>
                <Nav/>
                {/* <Home/> */}
                <History/>

              </PagedProductProvider>
            </ProductPageProvider>
        </MoneyProvider>
      </ProductProvider>
    )
}

export default App
