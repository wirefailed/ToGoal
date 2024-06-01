import React, { useState } from "react";
import NavBar from "./NavBar";
import Goals from "./Goals";
import RecordProgress from "./RecordProgress";
import Progress from "./Progress";
import Graph from "./Graph";
import Footer from "./Footer";

function App() {
    return (
        <div>
            <NavBar />
            <Goals />
            <RecordProgress />
            {progresses.map((progressItem, index) => {
                return (
                    <Progress
                        key={index}
                        id={index}
                        title={progressItem.title}
                        content={progressItem.content}
                    />
                );
            })}
            <Graph />
            <Footer />
        </div>
    );
}

export default App;
