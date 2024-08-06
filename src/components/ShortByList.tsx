import { useState } from 'react'
import '../css/components/ShortByList.css'
import useProductContext from '../hooks/useProductContext'
import Button from '../UI/Button'
import sortByHighest from '../utilities/sortByHighest'
import sortByLowest from '../utilities/sortByLowest'

const ShortByList = () => {
    const {products, setProducts} = useProductContext()
    const [active, setActive] = useState('')

    const isActive = (nameBtn: string) => {
        console.log(nameBtn)
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
        <div className='ShortByList-Container'>
            <p className='ShortByList-Title'>Sort by: </p>
            <div className='ShortByList-Buttons'>
                <Button className={`ShortByList-Button ${active == 'mostRecent' ? 'active' : ''}`} 
                onClick={() => {mostRecent(); 
                                isActive('mostRecent');}
                        }
                    >Most Recent
                </Button>
                <Button className={`ShortByList-Button ${active == 'lowestPrice' ? 'active' : ''}`}  
                        onClick={() =>{lowestPrice(); 
                                        isActive('lowestPrice');}
                                }>
                    Lowest price
                </Button>
                <Button className={`ShortByList-Button ${active == 'highestPrice' ? 'active' : ''}`}  
                        onClick={() => {highestPrice(); 
                                        isActive('highestPrice');}
                                }>
                    Highest price
                </Button>
            </div>
            
        </div>
    )
}

export default ShortByList