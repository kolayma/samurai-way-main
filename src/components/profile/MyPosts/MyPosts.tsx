import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <div>
                    <textarea></textarea>
                    <button>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message="Hi, how are you?" likes={15}/>
                <Post message="my first post" likes={10}/>
            </div>
        </div>
    )
}
export default MyPosts;