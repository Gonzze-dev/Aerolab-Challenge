import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react'
// import useGetProducts from '../hooks/useGetProducts'
// import { API } from '../config'
import UseProductType from '../interfaces/UseProductType';

import { usePageContext } from './ProductPageProvider';
import { useProductContext } from './ProductProvider';

import sortBy from '../utilities/sortBy';


interface IPagedProduct extends UseProductType
{
    orderMethodName: string,
    setOrderMethodName: Dispatch<SetStateAction<string>>
}

const defaultValue: IPagedProduct = {
    products: [],
    setProducts: () => {},
    orderMethodName: '',
    setOrderMethodName: () => '',
    loading: false
};

interface ProviderProps {
    children: ReactNode;
}

const PagedProductContext = createContext<IPagedProduct>(defaultValue)

function PagedProductProvider({children}: ProviderProps): JSX.Element {

    const {page} = usePageContext()
    const {products: productsArr, loading} = useProductContext()
    const [products, setProducts] = useState([...productsArr])
    const [orderMethodName, setOrderMethodName] = useState('mostrecent')

    useEffect(() => {
        const newProductsPage = sortBy(orderMethodName, [...productsArr], page.index)
        setProducts(newProductsPage)
    }, [page, orderMethodName])

    return (
        <PagedProductContext.Provider value={{products, setProducts, orderMethodName, setOrderMethodName, loading}}>
            {children}
        </PagedProductContext.Provider>
    )
}

function usePagedProductContext () {
    const context = useContext(PagedProductContext)

    if( context === undefined) throw new Error('Error, context need a Product Provider')

    const {products, setProducts, orderMethodName, setOrderMethodName, loading} = context

    return {products, setProducts, orderMethodName, setOrderMethodName, loading}
}

export {usePagedProductContext, PagedProductProvider}