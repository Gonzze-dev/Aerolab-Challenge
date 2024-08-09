import Category from '../components/Category'
import ProductToolbar from '../components/ProductToolbar'
import ProductList from '../components/ProductList'
import ProductFooter from '../components/ProductFooter'

const Home = () => {
  return (
    <>
        <Category/>
        <div className='ProductSectionContainer'>
            <div className='ProductSection'>
                <ProductToolbar/>
                <ProductList/>
                <ProductFooter/>
            </div>
        </div>
    </>
  )
}

export default Home