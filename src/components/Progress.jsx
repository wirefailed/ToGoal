import React from "react";

function Progress(props) {
    function handleClick() {
        props.onDelete(props.id);
    }

    return (
        <div className="progress">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <p>{props.time} {props.percentage}</p>
            <button onClick={handleClick}>DELETE</button>
        </div>
    );
}

export default Progress;