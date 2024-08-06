import '../css/components/ProductToolbar.css'
import ProductCountDisplay from "./ProductCountDisplay"
import ShortByList from './ShortByList'

const ProductToolbar = () => {
    return (
        <div className="ProductToolbar">
            <ProductCountDisplay/>
            <ShortByList/>
        </div>
    )
  }
  
  export default ProductToolbar