import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
// import useGetProducts from '../hooks/useGetProducts'
// import { API } from '../config'
import UseProductType from '../interfaces/UseProductType';
import { products as items } from '../products';
import Product from '../interfaces/Product';
import useFetch from '../hooks/useFetch';
import { API_GET_PRODUCTS } from '../config';

const defaultProduct:Product[] = [
    {
        img: {
            hdUrl: '',
            url: ''
        },
        _id: '',
        name: '',
        cost: 0,
        category: ''
    }
]
const defaultValueProductType: UseProductType = {
    products: [],
    setProducts: () => {},
    loading: false
};

interface ProductProviderProps {
    children: ReactNode;
}

const ProductContext = createContext<UseProductType>(defaultValueProductType)

function ProductProvider({children}: ProductProviderProps): JSX.Element {
    //API_GET_PRODUCTS
    const {data, loading} = useFetch<Product[]>({API: ''})
    const [products, setProducts] = useState<Product[]>(defaultProduct)

    useEffect(() => {
        if (!loading) setProducts(data ? data : items)
    }, [loading])
    return (
        <ProductContext.Provider value={{products, setProducts, loading}}>
            {children}
        </ProductContext.Provider>
    )
}

function useProductContext(): UseProductType
{
    const {products, setProducts, loading} = useContext(ProductContext);

    if (!products) {
        throw new Error('useProductContext debe ser usado dentro de un ProductProvider');
    }

    return {products, setProducts, loading};
}

export {useProductContext, ProductProvider}