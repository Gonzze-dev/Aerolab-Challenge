import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
// import useGetProducts from '../hooks/useGetProducts'
// import { API } from '../config'
import UseProductType from '../interfaces/UseProductType';

import { usePageContext } from './ProductPageProvider';
import { useProductContext } from './ProductProvider';
import paginateArray from '../utilities/paginateArray';

const defaultValue: UseProductType = {
    products: [],
    setProducts: () => {}
};

interface ProviderProps {
    children: ReactNode;
}

const PagedProductContext = createContext<UseProductType>(defaultValue)

function PagedProductProvider({children}: ProviderProps): JSX.Element {

    const {page} = usePageContext()
    const {products: productsArr} = useProductContext()
    const [products, setProducts] = useState([...productsArr])

    useEffect(() => {
        const newProductsPage = paginateArray([...productsArr], page.index)

        setProducts(newProductsPage)
    }, [page])
    
    return (
        <PagedProductContext.Provider value={{products, setProducts}}>
            {children}
        </PagedProductContext.Provider>
    )
}

function usePagedProductContext () {
    const context = useContext(PagedProductContext)

    if( context === undefined) throw new Error('Error, context need a Product Provider')

    const {products, setProducts} = context

    return {products, setProducts}
}

export {usePagedProductContext, PagedProductProvider}