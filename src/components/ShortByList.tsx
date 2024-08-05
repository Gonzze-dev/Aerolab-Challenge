import '../css/components/ShortByList.css'
import useProductContext from '../hooks/useProductContext'
import Button from '../UI/Button'
import sortByHighest from '../utilities/sortByHighest'
import sortByLowest from '../utilities/sortByLowest'

const ShortByList = () => {
    const {products, setProducts} = useProductContext()
    console.log(products)
    const mostRecent = () =>
    {
        const newProducts = [...products]
        newProducts.sort((a, b) => sortByHighest(b._id, a._id))
        setProducts(newProducts)
    }

    const lowestPrice = () =>
    {
        const newProducts = [...products]
        newProducts.sort((a,b) => sortByLowest(a.cost, b.cost))
        setProducts(newProducts)
    }

    const highestPrice = () =>
    {
        const newProducts = [...products]
        newProducts.sort((a,b) => sortByHighest(a.cost, b.cost))
        setProducts(newProducts)
    }

    return (
        <div className='ShortByList-Container'>
            <p className='ShortByList-Title'>Sort by: </p>
            <div className='ShortByList-Buttons'>
                <Button onClick={mostRecent}>Most Recent</Button>
                <Button onClick={lowestPrice}>Lowest price</Button>
                <Button onClick={highestPrice}>Highest price</Button>
            </div>
            
        </div>
    )
}

export default ShortByList