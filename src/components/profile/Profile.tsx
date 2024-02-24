import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (
        <div className={s.content}>
            <img src="https://i.pinimg.com/564x/bd/b1/a9/bdb1a91ecf456c7bba54a5b453a95223.jpg" alt=""/>
            <div>
                ava + description
            </div>

        <MyPosts />
        </div>
    )
}
export default Profile;