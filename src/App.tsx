import './App.css'
import { ProductProvider } from './providers/ProductProvider'
import { MoneyProvider } from './providers/MoneyProvider'

import Nav from './components/Nav'
import Category from './components/Category'
import ProductToolbar from './components/ProductToolbar'
import ProductList from './components/ProductList'
import ProductFooter from './components/ProductFooter'
import { ProductPageProvider } from './providers/ProductPageProvider'
import { PagedProductProvider } from './providers/PagedArrayProvider'

function App() {
    
    return (
      <ProductProvider>
        <MoneyProvider>
          <ProductPageProvider>
          <PagedProductProvider>
                <Nav/>
                <Category/>
                <div className='ProductSectionContainer'>
                  <div className='ProductSection'>
                    <ProductToolbar/>
                    <ProductList/>
                    <ProductFooter/>
                  </div>
                </div>
              </PagedProductProvider>
            </ProductPageProvider>
        </MoneyProvider>
      </ProductProvider>
    )
}

export default App
