import React from 'react'
import m from './Message.module.css'

type PropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: PropsType) {
    return (
        <div className={m.message}>
            <img src={props.avatar} alt={'avatar'} className={m.img} />
            <div className={m.cub}>
            </div>
            <div className={m.content}>
                <div className={m.name}>{props.name}</div>
                <div className={m.text}>{props.message}</div>
                <div className={m.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
