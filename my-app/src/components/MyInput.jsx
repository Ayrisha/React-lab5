import React from "react";

const MyInput = React.forwardRef((props, ref) =>{
    return(
        <input className = "input" ref = {ref} {...props}/>
    );
});

export default MyInput;