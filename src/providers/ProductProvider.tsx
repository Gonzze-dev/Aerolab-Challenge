import { createContext, ReactNode } from 'react'
import useGetProducts from '../hooks/useGetProducts'
import { API } from '../config'
import UseProductType from '../interfaces/UseProductType';

const defaultValueProductType: UseProductType = {
    products: [],
    setProducts: () => {}
};

const ProductContext = createContext<UseProductType>(defaultValueProductType)

interface ProductProviderProps {
    children: ReactNode;
}

function ProductProvider({children}: ProductProviderProps): JSX.Element {
    const {products, setProducts} = useGetProducts({API: API})
    
    return (
        <ProductContext.Provider value={{products, setProducts}}>
            {children}
        </ProductContext.Provider>
    )
}

export {ProductContext, ProductProvider}