import '../css/components/ProductToolbar.css'

import PrevNextPage from './PrevNextPage'
import ProductCountDisplay from "./ProductCountDisplay"
import SortByList from './SortByList'

const ProductToolbar = () => {
    return (
        <div className="ProductToolbar-Container">
            <div className='ProductToolbar'>
                <ProductCountDisplay/>
                <SortByList/>
            </div>
            <PrevNextPage/>
            
        </div>
    )
  }
  
  export default ProductToolbar