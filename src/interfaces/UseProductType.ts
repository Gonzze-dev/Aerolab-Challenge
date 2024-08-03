import { Dispatch, SetStateAction } from "react";
import Product from "./Product";

interface UseProductType
{
    products: Product[] | [], 
    setProducts: Dispatch<SetStateAction<Product[]>>
}

export default UseProductType