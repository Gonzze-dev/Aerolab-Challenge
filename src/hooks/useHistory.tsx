import { useEffect, useState } from 'react'

import useFetch from './useFetch'

import { API_GET_USER } from '../config'
import User from '../interfaces/User'
import Product from '../interfaces/Product'

const defaultHistory: Product[] = []

const useHistory = () => {
    
    const {data, loading} = useFetch<User>({API: API_GET_USER})
    const [history, setHistory] = useState(defaultHistory)

    useEffect(() => {
        if (!loading) 
            setHistory(data ? data.redeemHistory : [])
    },[loading])

    return {history, loading}
}

export default useHistory