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
    let dialogsData = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Sveta"},
        {id: 3, name: "Kristy"},
        {id: 4, name: "Katya"},
        {id: 5, name: "Serega"},
        {id: 6, name: "Viktor"}
    ]

    let messagesData = [
        {id: 1, message: "Hello"},
        {id: 2, message: "hi"},
        {id: 3, message: "How are you?"},
        {id: 4, message: "Where are you from?"},
        {id: 5, message: "Yo"}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} message="hi" />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} message="hi" />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} message="hi" />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} message="hi" />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} message="hi" />
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} message="hi" />


            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
                <Message message={messagesData[4].message}/>

            </div>
        </div>
    )
}
export default Dialogs;