import { useState } from 'react'
import '../css/components/SortByList.css'

import Button from '../UI/Button'
import sortByHighest from '../utilities/sortByHighest'
import sortByLowest from '../utilities/sortByLowest'
import { usePagedProductContext } from '../providers/PagedArrayProvider'

const SortByList = () => {
    const {products, setProducts} = usePagedProductContext()
    const [active, setActive] = useState('')

    const isActive = (nameBtn: string) => {

        setActive(nameBtn)
    }
    const mostRecent = () => {
        const newProducts = [...products]
        newProducts.sort((a, b) => sortByHighest(b._id, a._id))
        setProducts(newProducts)
    }

    const lowestPrice = () => {
        const newProducts = [...products]
        newProducts.sort((a,b) => sortByLowest(a.cost, b.cost))
        setProducts(newProducts)
    }

    const highestPrice = () => {
        const newProducts = [...products]
        newProducts.sort((a,b) => sortByHighest(a.cost, b.cost))
        setProducts(newProducts)
    }

    return (
        <div className='SortByList-Container'>
            <p className='SortByList-Title'>Sort by: </p>
                <div className='SortByList-Buttons'>
                    <Button className={`SortByList-Button ${active == 'mostRecent' ? 'active' : ''}`} 
                    onClick={() => {mostRecent(); 
                                    isActive('mostRecent');}
                            }
                        >Most Recent
                    </Button>
                    <Button className={`SortByList-Button ${active == 'lowestPrice' ? 'active' : ''}`}  
                            onClick={() =>{lowestPrice(); 
                                            isActive('lowestPrice');}
                                    }>
                        Lowest price
                    </Button>
                    <Button className={`SortByList-Button ${active == 'highestPrice' ? 'active' : ''}`}  
                            onClick={() => {highestPrice(); 
                                            isActive('highestPrice');}
                                    }>
                        Highest price
                    </Button>
                </div>

                <select className='SortByList-Select' name="SortBy-options">
                    <option value="">Sort By</option>
                    <option value="">Most recent</option>
                    <option value="">Lowet price</option>
                    <option value="">Highest price</option>
                </select>

        </div>
    )
}

export default SortByList