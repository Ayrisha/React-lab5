import React from "react";


const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.number}. </strong>
                {props.post.body}
            </div>
            <div className="post__btns">
                <button className="button__del" onClick={() => props.remove(props.post)}>
                    Удалить
                </button>
            </div>
        </div>
    );
};

export default PostItem;