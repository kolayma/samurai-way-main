import React from "react";
import s from './Dialogs.module.css'

const Dialogs = ()=> {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Dimych
                </div>
                <div className={s.dialog}>
                    Sveta
                </div>
                <div className={s.dialog}>
                    Kristy
                </div>
                <div className={s.dialog}>
                    Katya
                </div>
                <div className={s.dialog}>
                    Serega
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