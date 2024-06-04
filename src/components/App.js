import React, { useState } from "react";
import NavBar from "./NavBar";
import Goal from "./Goal";
import RecordProgress from "./RecordProgress";
import Progress from "./Progress";
import Graph from "./Graph";
import Footer from "./Footer";

function App() {
    const [goals, setGoals] = useState([{
        title: "New Goal",
    }])
    const [selectedGoalIndex, setSelectedGoalIndex] = useState(0);
    const [progresses, setProgresses] = useState([]);

    function addGoal(goalTitle) {
        setGoals([...goals, {title: goalTitle, progresses: []}]);
        setSelectedGoalIndex(goals.length);
    }

    function addNewGoal() {
        addGoal("New Goal");
    }

    function handleGoalSelection(index) {
        setSelectedGoalIndex(parseInt(index));
    }

    function handleUpdateGoal (selectedIndex, editedTitle) {
        const updatedGoals = goals.map((otherGoal, index) => 
            index === selectedIndex ? {...otherGoal, title: editedTitle} : otherGoal // through iterating map, I find the goal that is being edited and while mainting my properties through ...otherGoal, I change the title
        );
        setGoals(updatedGoals);
    }

    function handleDeleteGoal(selectedIndex) {
        const updatedGoals = goals.filter((goalItem, index) => index !== selectedIndex);
        setGoals(updatedGoals);
        setSelectedGoalIndex(0);
    }

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
            <NavBar 
                goals={goals} 
                onGoalSelect={handleGoalSelection}
            />
            
            <Goal
                goal={goals[selectedGoalIndex]}
                index={selectedGoalIndex}
                onUpdate={handleUpdateGoal}
                onDelete={handleDeleteGoal}
                onCreate={addNewGoal}
            />
            
            <RecordProgress onCreate={addProgress} goalIndex={selectedGoalIndex} />
            {progresses
                .filter(progress => progress.goalIndex === selectedGoalIndex)
                .map((progressItem, index) => {
                return (
                    <Progress
                        key={index}
                        id={index}
                        title={progressItem.title}
                        content={progressItem.content}
                        time={progressItem.time}
                        percentage={progressItem.percentage}
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
