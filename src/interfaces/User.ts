import History from "./History"

interface User
{
    id: string
    name: string
    points: number
    reedemHistory: History[]
    createDate: string
}

export default User