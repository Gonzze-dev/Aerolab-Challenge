import { createContext, ReactNode, useContext, useState } from 'react'
import MoneyContextType from '../interfaces/MoneyContextType'



interface MoneyProviderProps {
    children: ReactNode
}

const MoneyContext = createContext<MoneyContextType | undefined>(undefined)

const MoneyProvider = ({children}: MoneyProviderProps) => {
    const [money, setMoney] = useState<number>(300)
    
    return (
        <MoneyContext.Provider value={{money, setMoney}}>
            {children}
        </MoneyContext.Provider>
    )
}

function useMoneyContext() {
    const context = useContext(MoneyContext)
    
    if(context === undefined) throw 'useMoneyContext debe de ser usado dentro de su provider'
    
    const {money, setMoney} = context

    return {money, setMoney}
}

export {useMoneyContext, MoneyProvider}