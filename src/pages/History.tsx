import '../css/components/History.css'
import { useProductContext } from '../providers/ProductProvider'

import PurchasedProduct from '../components/PurchasedProduct'
import Product from '../interfaces/Product'

const History = () => {
    const {products} = useProductContext()

    return (
        <div className='HistoryContainer'>
            <div className='HistoryContainer-Products'>
                <h1 className='HistoryContainer-Title'>History</h1>
                {products.map((product: Product, index) => 
                    <PurchasedProduct key={index} {...product}/>)
                }
            </div>
        </div>
  )
}

export default History