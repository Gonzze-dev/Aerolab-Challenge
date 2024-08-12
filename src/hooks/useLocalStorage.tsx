import { useState } from 'react'

function searchValueInLocalStorage<T> (key: string, initValue: T): T {
    let data = initValue

    try {
        const item = window.localStorage.getItem(key)
        data = item ? JSON.parse(item) : initValue
    } catch (e) {
        console.error(e)
    } finally
    {
        return data
    }
}

export function useLocalStorage<T>(key: string, initValue: T):[T, (value: T | ((val: T) => T)) => void] {
    const [storedValue, setStoredValue] = useState(searchValueInLocalStorage(key, initValue))

    const setValue = (value: T | ((val: T) => T)) => {
        try{
            const valueToString = JSON.stringify(value)

            setStoredValue(value)
            window.localStorage.setItem(key, valueToString)
        }catch(e){
            console.error(e)
        }
    }

    return [storedValue, setValue]
}