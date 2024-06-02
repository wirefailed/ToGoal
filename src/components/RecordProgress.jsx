import React, { useState } from "react";

function RecordProgress(props) {
    const [progress, setProgress] = useState({
        title: "",
        content: "",
        time: "",
        percentage: 0
    });

    function handleChange(event) {
        const {name, value} = event.target;

        setProgress(prevProgress => {
            return {
                ...prevProgress,
                [name]: value
            };
        });
    }

    function submitProgress(event) {
        props.onCreate(progress);
        setProgress({
            title: "",
            content: "",
            time: "",
            percentage: 0
        });
        event.preventDefault();
    }

    return (
        <div>
            <form>
                <input 
                    name="title"
                    onChange={handleChange}
                    value={progress.title}
                    placeholder="Title"
                />
                <textarea 
                    name="content"
                    onChange={handleChange}
                    value={progress.content}
                    placeholder="Write down some details on a progress"
                    rows="3"
                />
                <input 
                    name="time"
                    onChange={handleChange}
                    value={progress.time}
                    placeholder="Date Year/Month/Day"
                />
                <input 
                    name="percentage"
                    onChange={handleChange}
                    value={progress.percentage}
                    placeholder="0 to 100"
                />
                <button onClick={submitProgress}>Add</button>
            </form>
        </div>
    )
}