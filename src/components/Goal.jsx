import React, { useState } from "react";

function Goal(props) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(props.goal.title);

    function handleEdit() {
        setIsEditing(true);
    }

    function handleSave() {
        props.onUpdate(props.index, editedTitle);
        setIsEditing(false);
    }

    function handleDelete() {
        props.onDelete(props.index);
    }

    return (
        <div className="Goal">
            {isEditing ? (
                <input 
                    type="text"
                    value={editedTitle}
                    onChange={e=>setEditedTitle(e.target.value)}
                />
            ) : (
                <h2>{props.goal.title}</h2>
            )}
            {isEditing ? (
                <button onClick={handleSave}>Save</button>
            ) : (
                <button onClick={handleEdit}>Edit</button>
            )}
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default Goal;