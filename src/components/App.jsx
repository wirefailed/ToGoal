import React, { useState } from "react";
import NavBar from "./NavBar";
import RecordProgress from "./RecordProgress";
import Progress from "./Progress";
import Graph from "./Graph";
import Footer from "./Footer";

function App() {
    const [progresses, setProgresses] = useState([]);

    function addProgress(newProgress) {
        setProgresses(prevProgress => {
            return [...prevProgress, newProgress];
        });
    }

    function deleteProgress(id) {
        setProgresses(prevProgress => {
            return prevProgress.filter((progressItem, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>
            <NavBar />
            <Goals />
            <RecordProgress onCreate={addProgress} />
            {progresses.map((progressItem, index) => {
                return (
                    <Progress
                        key={index}
                        id={index}
                        title={progressItem.title}
                        content={progressItem.content}
                        onDelete={deleteProgress}
                    />
                );
            })}
            <Graph />
            <Footer />
        </div>
    );
}

export default App;
