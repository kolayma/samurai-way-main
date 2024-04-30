import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogType = {
    id: number
    name: string
    message: string
}

const DialogItem: React.FC<DialogType> = (props) => {
    let path = '/dialog/1' + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message: React.FC<DialogType> = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}
const Dialogs = () => {
    let dialogs = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Sveta"},
        {id: 3, name: "Kristy"},
        {id: 4, name: "Katya"},
        {id: 5, name: "Serega"},
        {id: 6, name: "Viktor"}
    ]

    let messages = [
        {id: 1, message: "Hello"},
        {id: 2, message: "hi"},
        {id: 3, message: "How are you?"},
        {id: 4, message: "Where are you from?"},
        {id: 5, message: "Yo"}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogs.map(d => {
                    return (
                        <div>
                            {d.name}
                        </div>)
                })}
            </div>
            <div className={s.messages}>
                {messages.map(m => {
                    return (
                        <div>
                            {m.message}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Dialogs;