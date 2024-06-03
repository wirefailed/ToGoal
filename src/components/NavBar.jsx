import React from 'react';

function NavBar(props) {
    return (
        <div className="NavBar">
            <h1>To Goal!</h1>

            <select onChange={e => props.onGoalSelect(e.target.value)} className='custom-select'>
                <option value=''>Choose your goal!</option>
                {props.goals.map((goal, index) => (
                    <option key={index} value={index}>
                        {goal.title}
                    </option>
                ))}

            </select>
        </div>
    );
}

export default NavBar;