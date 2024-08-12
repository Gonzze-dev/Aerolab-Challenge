import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { API_GET_USER } from '../config'

import UseUserType from '../interfaces/UseUserType'
import useGetUser from '../hooks/useGetUser'
import User from '../interfaces/User'
import { useLocalStorage } from '../hooks/useLocalStorage'


interface Props {
    children: ReactNode
}

const defaultUser: User = {
    id: '',
    name: 'Gonzalo',
    points: 0,
    reedemHistory: [],
    createDate: ''
}

const defaultUseUser:UseUserType = {
    user: defaultUser,
    setUser: () => {}
}

const UserContext = createContext<UseUserType>(defaultUseUser)

const UserProvieder = ({children}: Props) => {
    const {user} = useGetUser({API_GET_USER: API_GET_USER})
    const [userLS, setUserLS] = useLocalStorage<User>('User', user)
    
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