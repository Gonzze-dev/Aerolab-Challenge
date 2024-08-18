import { useEffect, useState } from 'react'
import getData from '../utilities/getData';

import User from '../interfaces/User';
import UseUserType from '../interfaces/UseUserType';

interface Params {
    API_GET_USER: string;
}

const defaultUser: User = {
    id: '',
    name: '',
    points: 0,
    redeemHistory: [],
    createDate: ''
}
function useGetUser({API_GET_USER}: Params): UseUserType
{
    const [user, setUser] = useState<User>(defaultUser)

    const getDataFetch = async () => {
        let dataUser:User | null  = await getData(API_GET_USER)
        dataUser = dataUser ?? defaultUser

        setUser(dataUser)
    }

    useEffect(() => {getDataFetch()}, [API_GET_USER])

    return {user, setUser}
}

export default useGetUser