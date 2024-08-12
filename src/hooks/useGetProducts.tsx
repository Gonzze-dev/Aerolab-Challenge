import { useEffect, useState } from 'react'
import getData from '../utilities/getData';
import Product from '../interfaces/Product';
import UseProductType from '../interfaces/UseProductType';

interface Params {
    API_GET_PRODUCTS: string;
}

function useGetProducts({API_GET_PRODUCTS}: Params): UseProductType
{
    const [products, setProducts] = useState<Product[]>([])

    const getDataFetch = async () => {
        let dataProduct:Product[] | null  = await getData(API_GET_PRODUCTS)
        dataProduct = dataProduct ?? []

        setProducts(dataProduct)
    }

    useEffect(() => {getDataFetch()}, [API_GET_PRODUCTS])

    return {products, setProducts}
}

export default useGetProducts