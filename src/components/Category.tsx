import '../css/components/Category.css'
import headerx1Png from '../assets/header-x1.png'

const Category = () => {
    
    return (
        <div className="CategoryContainer">
           <img className='Category-Img' src={headerx1Png} alt="" width={'auto'} height={'auto'}/>
           <h1 className='Category-Type'>Electronics</h1>
        </div>
    )
  }
  
  export default Category