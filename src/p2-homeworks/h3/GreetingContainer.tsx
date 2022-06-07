import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";
import {v1} from "uuid";

type GreetingContainerPropsType = {
    users: Array<UserType> //+
    addUserCallback: (name: string) => void // +
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {

    const [name, setName] = useState<string>('') // +
    const [error, setError] = useState<string>('') // +

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // +
        setName(e.currentTarget.value)
        setError('')
    }
    const addUser = () => {

        if(name !== ''){
            alert(`Hello ${name} !`) // +
            addUserCallback(name)
            setName('')
            setError('')
        }else{
            setName('')
            setError('Error')

        }
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            users={users}
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
