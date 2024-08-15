import { Dispatch, SetStateAction } from "react";
import Product from "./Product";

interface UseProductType
{
    products: Product[] | [], 
    setProducts: Dispatch<SetStateAction<Product[]>>,
    loading: boolean
}

export default UseProductType