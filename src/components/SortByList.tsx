import '../css/components/SortByList.css'

import Button from '../UI/Button'

import { usePagedProductContext } from '../providers/PagedArrayProvider'

const SortByList = () => {
    const {orderMethodName,setOrderMethodName} = usePagedProductContext()


    const activeOrderInSelect = (e: any) =>
    {
        const value = e.target.value
        setOrderMethodName(value)
    }
    return (
        <div className='SortByList-Container'>
            <p className='SortByList-Title'>Sort by: </p>
                <div className='SortByList-Buttons'>
                    <Button className={`SortByList-Button ${orderMethodName == 'mostrecent' ? 'active' : ''}`} 
                    onClick={() => {setOrderMethodName('mostrecent')}
                            }
                        >Most Recent
                    </Button>
                    <Button className={`SortByList-Button ${orderMethodName == 'lowestprice' ? 'active' : ''}`}  
                            onClick={() =>{setOrderMethodName('lowestprice')}
                                    }>
                        Lowest price
                    </Button>
                    <Button className={`SortByList-Button ${orderMethodName == 'highestprice' ? 'active' : ''}`}  
                            onClick={() => {setOrderMethodName('highestprice')}
                                    }>
                        Highest price
                    </Button>
                </div>

                <select className='SortByList-Select' name="SortBy-options" onChange={activeOrderInSelect}>
                    <option value="">Sort By</option>
                    <option value="mostrecent">Most recent</option>
                    <option value="lowestprice">Lowest price</option>
                    <option value="highestprice">Highest price</option>
                </select>

        </div>
    )
}

export default SortByList