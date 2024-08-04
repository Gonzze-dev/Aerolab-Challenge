import { createContext, ReactNode, useState } from 'react'
// import useGetProducts from '../hooks/useGetProducts'
// import { API } from '../config'
import UseProductType from '../interfaces/UseProductType';
import { products as items } from '../products';
import Product from '../interfaces/Product';

const defaultValueProductType: UseProductType = {
    products: [],
    setProducts: () => {}
};

interface ProductProviderProps {
    children: ReactNode;
}

const ProductContext = createContext<UseProductType>(defaultValueProductType)

function ProductProvider({children}: ProductProviderProps): JSX.Element {
    // const {products, setProducts} = useGetProducts({API: API})

    const [products, setProducts] = useState<Product[]>(items)
    
    return (
        <ProductContext.Provider value={{products, setProducts}}>
            {children}
        </ProductContext.Provider>
    )
}

export {ProductContext, ProductProvider}