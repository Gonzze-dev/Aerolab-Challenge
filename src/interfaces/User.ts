import Product from "./Product"

interface User
{
    id: string
    name: string
    points: number
    redeemHistory: Product[]
    createDate: string
}

export default User