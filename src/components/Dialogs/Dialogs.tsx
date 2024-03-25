import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = ()=> {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialog/1" >Dimych</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialog/2">Sveta</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialog/3">Kristy</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialog/4">Katya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialog/5">Serega</NavLink>
                </div>

            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello!</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Where are you from?</div>
            </div>


        </div>
    )
}
export default Dialogs;