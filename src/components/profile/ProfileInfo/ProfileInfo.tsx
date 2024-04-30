import React from "react";
import s from '../ProfileInfo/ProfileInfo.module.css'


const ProfileInfo = () => {
    return (

        <div className={s.content}>
            <img src="https://i.pinimg.com/564x/bd/b1/a9/bdb1a91ecf456c7bba54a5b453a95223.jpg" alt=""/>
            <div>
                ava + description
            </div>
        </div>
    )
}
export default ProfileInfo;