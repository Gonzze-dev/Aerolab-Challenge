import { Dispatch, SetStateAction } from "react";

import User from "./User";

interface UseUserType
{
    user: User,  
    setUser: Dispatch<SetStateAction<User>>
}

export default UseUserType