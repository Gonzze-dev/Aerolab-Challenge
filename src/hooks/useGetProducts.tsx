import { useEffect, useState } from 'react'
import getData from '../utilities/getData';
import Product from '../interfaces/Product';
import UseProductType from '../interfaces/UseProductType';

interface GetDataParams {
    API: string;
}

function useGetProducts({API}: GetDataParams): UseProductType
{
    const [products, setProducts] = useState<Product[]>([])

    const getDataFetch = async () => {
        let dataProduct:Product[] | null  = await getData(API)
        dataProduct = dataProduct ?? []

        setProducts(dataProduct)
    }

    useEffect(() => {getDataFetch()}, [API])

    return {products, setProducts}
}

export default useGetProducts