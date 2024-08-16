import '../css/components/History.css'

import PurchasedProduct from '../components/PurchasedProduct'
import Product from '../interfaces/Product'
import useHistory from '../hooks/useHistory'

import { useProductContext } from '../providers/ProductProvider';



const History = () => {
    const {history, loading} = useHistory()
    const {products} = useProductContext()

    const matchedProducts = products.filter(prod =>
        history.some(hist => hist.productId === prod._id)
      );

    return (
        <div className='HistoryContainer'>
            <h1 className='HistoryContainer-Title'>History</h1>
            <div className='HistoryContainer-Products'>
                {
                    loading ?
                    <strong>Cargando...</strong>
                    :
                    matchedProducts.map((product: Product, index) => 
                        <PurchasedProduct key={index} {...product}/>
                    )
                    
                }
                
            </div>
        </div>
  )
}

export default History