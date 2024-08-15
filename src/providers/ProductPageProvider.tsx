import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

import Page from '../interfaces/Page'
import usePageType from '../interfaces/usePageType';
import { useProductContext } from './ProductProvider';
import { productsPerPage } from '../config';

const defaultValue: Page = {
        index: 1,
        size: 0
}

interface ProviderProps {
    children: ReactNode
}

const ProductContext = createContext<usePageType | undefined>(undefined)

const ProductPageProvider = ({children}: ProviderProps) => {
    const {products, loading} =  useProductContext()
    
    const [page, setPage] = useState<Page>({...defaultValue})

    useEffect(() => {
        if (!loading){
            const size = Math.ceil(products.length/productsPerPage)
            defaultValue.size = size
            setPage({...defaultValue})
        }
    },[products])
    
    return (
        <ProductContext.Provider value={{page, setPage}}>
            {children}
        </ProductContext.Provider>
    )
}

function usePageContext() {
    const context = useContext(ProductContext)
    
    if(context === undefined) throw 'useMoneyContext debe de ser usado dentro de su provider'
    
    const {page, setPage} = context

    return {page, setPage}
}

export {usePageContext, ProductPageProvider}