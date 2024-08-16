import { useEffect, useState } from 'react'

import useFetch from './useFetch'
import History from '../interfaces/History'
import { API_GET_HISTORY } from '../config'



const defaultHistory: History[] = []

const useHistory = () => {
    
    const {data, loading} = useFetch<History[]>({API: API_GET_HISTORY})
    const [history, setHistory] = useState(defaultHistory)

    useEffect(() => {
        if (!loading) 
            setHistory(data ?? [])
    },[loading])

    return {history, loading}
}

export default useHistory