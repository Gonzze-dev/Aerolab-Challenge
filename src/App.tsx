import './App.css'
import { ProductProvider } from './providers/ProductProvider'
import { MoneyProvider } from './providers/MoneyProvider'

import Nav from './components/Nav'
import Category from './components/Category'
import ProductToolbar from './components/ProductToolbar'
import ProductList from './components/ProductList'
import ProductFooter from './components/ProductFooter'


function App() {
    
    return (
      <ProductProvider>
        <MoneyProvider>
          <Nav/>
          <Category/>
          <div className='ProductSectionContainer'>
            <div className='ProductSection'>
              <ProductToolbar/>
              <ProductList/>
              <ProductFooter/>
            </div>
          </div>
          
          
        </MoneyProvider>
      </ProductProvider>
    )
}

export default App
