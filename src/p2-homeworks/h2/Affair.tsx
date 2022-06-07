import React from 'react'
import {AffairType} from "./HW2";
import s from "./Affairs.module.css";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair.id)}// need to fix

    return (
        <div>
            <span className={s.name}>{props.affair.name} </span>
            <span>{props.affair.priority}</span>

            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
