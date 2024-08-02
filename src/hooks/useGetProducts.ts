import { useEffect, useState } from 'react'
import getData from '../utilities/getData';
import Product from '../interfaces/product';

interface GetDataParams {
    API: string;
}



function useGetProducts({API}: GetDataParams): any
{
    const [data, setData] = useState<Product[]>([])

    const getDataFetch = async () => {
        const dataRes = await getData(API)
        setData(dataRes)
    }

    useEffect(() => {getDataFetch()}, [API])

    return [data, setData]
}

export default useGetProducts