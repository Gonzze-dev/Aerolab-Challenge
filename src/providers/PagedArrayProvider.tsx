import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react'
// import useGetProducts from '../hooks/useGetProducts'
// import { API } from '../config'
import UseProductType from '../interfaces/UseProductType';

import { usePageContext } from './ProductPageProvider';
import { useProductContext } from './ProductProvider';
import paginateArray from '../utilities/paginateArray';
import { highestPrice, lowestPrice, mostRecent } from '../utilities/sortByProduc';


interface IPagedProduct extends UseProductType
{
    orderMethodName: string,
    setOrderMethodName: Dispatch<SetStateAction<string>>
}

const defaultValue: IPagedProduct = {
    products: [],
    setProducts: () => {},
    orderMethodName: '',
    setOrderMethodName: () => ''
};

interface ProviderProps {
    children: ReactNode;
}

const PagedProductContext = createContext<IPagedProduct>(defaultValue)

function PagedProductProvider({children}: ProviderProps): JSX.Element {

    const {page} = usePageContext()
    const {products: productsArr} = useProductContext()
    const [products, setProducts] = useState(paginateArray([...productsArr], page.index))
    const [orderMethodName, setOrderMethodName] = useState('mostrecent')

    useEffect(() => {
        let newProductsPage = paginateArray([...productsArr], page.index)

        if(orderMethodName == 'mostrecent') newProductsPage = mostRecent(newProductsPage)
        else if(orderMethodName == 'lowestprice') newProductsPage = lowestPrice(newProductsPage)
        else if(orderMethodName == 'highestprice') newProductsPage = highestPrice(newProductsPage)

        setProducts(newProductsPage)
    }, [page])

    useEffect(() => {
        let newProductsPage = [...products]

        if(orderMethodName == 'mostrecent') newProductsPage = mostRecent(newProductsPage)
        else if(orderMethodName == 'lowestprice') newProductsPage = lowestPrice(newProductsPage)
        else if(orderMethodName == 'highestprice') newProductsPage = highestPrice(newProductsPage)

        setProducts(newProductsPage)
    }, [orderMethodName])

    return (
        <PagedProductContext.Provider value={{products, setProducts, orderMethodName, setOrderMethodName}}>
            {children}
        </PagedProductContext.Provider>
    )
}

function usePagedProductContext () {
    const context = useContext(PagedProductContext)

    if( context === undefined) throw new Error('Error, context need a Product Provider')

    const {products, setProducts, orderMethodName, setOrderMethodName} = context

    return {products, setProducts, orderMethodName, setOrderMethodName}
}

export {usePagedProductContext, PagedProductProvider}