import { useContext } from "react";
import { ProductContext } from "../providers/ProductProvider";
import UseProductType from "../interfaces/UseProductType";

function useProductContext(): UseProductType
{
    const {products, setProducts} = useContext(ProductContext);

    if (!products) {
        throw new Error('useProductContext debe ser usado dentro de un ProductProvider');
    }

    return {products, setProducts};
}

export default useProductContext