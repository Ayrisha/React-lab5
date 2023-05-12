import React, { useState } from "react";
import MyInput from "./MyInput";

const Form = ({create}) => {
    const [post, setPost] = useState({body: ''})

    const addNewPost = (e) =>{
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({body: ''})
      }

    return (
        <div>
            <h1 className="title">
                Список дел
            </h1>

            <div className="input">
                <MyInput
                    value={post.body}
                    onChange={e => setPost({ ...post, body: e.target.value })}
                    type="text"
                    placeholder="Введите задачу"
                />
                <button className = "button__add" onClick={addNewPost}>Добавить</button>
            </div>
        </div>
    );
};

export default Form;