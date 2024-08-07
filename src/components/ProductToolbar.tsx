import '../css/components/ProductToolbar.css'

import PrevNextPage from './PrevNextPage'
import ProductCountDisplay from "./ProductCountDisplay"
import ShortByList from './ShortByList'

const ProductToolbar = () => {
    return (
        <div className="ProductToolbar-Container">
            <div className='ProductToolbar'>
                <ProductCountDisplay/>
                <ShortByList/>
            </div>
            <PrevNextPage/>
            
        </div>
    )
  }
  
  export default ProductToolbar