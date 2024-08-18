import '../css/components/History.css'

import PurchasedProduct from '../components/PurchasedProduct'
import Product from '../interfaces/Product'
import useHistory from '../hooks/useHistory'


const History = () => {
    const {history, loading} = useHistory()

    return (
        <div className='HistoryContainer'>
            <h1 className='HistoryContainer-Title'>History</h1>
            <div className='HistoryContainer-Products'>
                {
                    loading ?
                    <strong>Cargando...</strong>
                    :
                    history.map((product: Product, index) => 
                        <PurchasedProduct key={index} {...product}/>
                    )
                    
                }
                
            </div>
        </div>
  )
}

export default History