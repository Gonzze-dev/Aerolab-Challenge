import { useEffect, useState } from 'react'
import getData from '../utilities/getData';
import Product from '../interfaces/product';

interface GetDataParams {
    API: string;
}



function useGetProducts({API}: GetDataParams): [Product[] | [], 
                                                React.Dispatch<React.SetStateAction<Product[]>>]
{
    const [data, setData] = useState<Product[]>([])

    const getDataFetch = async () => {
        let dataProduct:Product[] | null  = await getData(API)
        dataProduct = dataProduct ?? []

        setData(dataProduct)
    }

    useEffect(() => {getDataFetch()}, [API])

    return [data, setData]
}

export default useGetProducts