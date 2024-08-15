import Product from "../interfaces/Product"
import paginateArray from "./paginateArray"
import { highestPrice, lowestPrice, mostRecent } from "./sortByProduc"

function sortBy(orderMethodName: string, arr:Product[], index: number) {
    let newProductsPage = paginateArray([...arr], index)

    if(orderMethodName == 'mostrecent') newProductsPage = mostRecent(newProductsPage)
    else if(orderMethodName == 'lowestprice') newProductsPage = lowestPrice(newProductsPage)
    else if(orderMethodName == 'highestprice') newProductsPage = highestPrice(newProductsPage)
    
    return newProductsPage
}

export default sortBy