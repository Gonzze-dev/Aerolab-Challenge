import Product from "../interfaces/Product"
import sortByHighest from "./sortByHighest"
import sortByLowest from "./sortByLowest"

const mostRecent = (products: Product[]) => {
    const newProducts = [...products]
    newProducts.sort((a, b) => sortByHighest(b._id, a._id))
    return newProducts
}

const lowestPrice = (products: Product[]) => {
    const newProducts = [...products]
    newProducts.sort((a,b) => sortByLowest(a.cost, b.cost))

    return newProducts
}

const highestPrice = (products: Product[]) => {
    const newProducts = [...products]
    newProducts.sort((a,b) => sortByHighest(a.cost, b.cost))
    return newProducts
}

export {mostRecent, lowestPrice, highestPrice}