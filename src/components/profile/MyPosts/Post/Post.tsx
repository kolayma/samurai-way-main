import React from "react";
import s from './Post.module.css'

type PropsType = {
    message: string
    likes: number
}

const Post = (props: PropsType) => {
    return (
        <div>
            <div className={s.item}>
                <img
                    src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?size=626&ext=jpg"/>
                {props.message}
                <div>
                    <span>like{props.likes}</span>
                </div>
            </div>
        </div>
    )
}
export default Post;