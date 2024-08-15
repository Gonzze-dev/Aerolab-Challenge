import { createContext, ReactNode, useContext, useEffect } from 'react'
import { API_GET_USER } from '../config'

import UseUserType from '../interfaces/UseUserType'

import User from '../interfaces/User'
import { useLocalStorage } from '../hooks/useLocalStorage'
import useFetch from '../hooks/useFetch'


interface Props {
    children: ReactNode
}

const defaultUser: User = {
    id: '1',
    name: 'Gonzalo',
    points: 2000,
    reedemHistory: [],
    createDate: ''
}

const defaultUseUser:UseUserType = {
    user: defaultUser,
    setUser: () => {}
}

const UserContext = createContext<UseUserType>(defaultUseUser)

const UserProvieder = ({children}: Props) => {
    //API_GET_USER
    const {data, loading} = useFetch<User>({API: ''})
    const [userLS, setUserLS] = useLocalStorage<User>('User', defaultUser)

    useEffect(() => {
        if (!loading) 
            setUserLS(data ? data : defaultUser)
    },[loading])

    return (
        <UserContext.Provider value={{user: userLS, setUser: setUserLS}}>
            {children}
        </UserContext.Provider>
    )
}

function useUserContext() {
    const context = useContext(UserContext)
    
    if(context === undefined) throw 'useMoneyContext debe de ser usado dentro de su provider'
    
    const {user, setUser} = context

    return {user, setUser}
}

export {useUserContext, UserProvieder}