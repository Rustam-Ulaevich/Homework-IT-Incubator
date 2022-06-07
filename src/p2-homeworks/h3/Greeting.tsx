import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import {UserType} from "./HW3";

type GreetingPropsType = {
    users: Array<UserType>
    name: string // +
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // +
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {users, name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : '' // need to fix with (?:)

    return (
        <div>
            <input value={name} onChange={setNameCallback}/>
            {/*<span>{error}</span>*/}
            <button onClick={addUser} >add</button>
            <span>{totalUsers}</span>
            <div className={inputClass}>{error}</div>
            <div>
                {users.map(u => <div>{u.name}</div>)}
            </div>
        </div>

    )
}

export default Greeting
