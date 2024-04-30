import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    let postData = [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "my first post", likesCount: 11}
    ]
    return (
        <div className={s.postsBlock}>
           <h3>My posts</h3>
            <div>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>add post</button>
                    </div>

                </div>
            </div>
            <div className={s.posts}>
                <Post message={postData[0].message} likes={postData[0].likesCount}/>
                <Post message={postData[1].message} likes={postData[1].likesCount}/>

            </div>
        </div>
    )
}
export default MyPosts;