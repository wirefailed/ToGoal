import React from 'react';

function NavBar(props) {
    return (
        <div className="navbar">
            <h1>To Goal!</h1>

            <select onChange={e => props.onGoalSelect(e.target.value)} className='custom-select'>
                {props.goals.mape((goal, index) => (
                    <option key={index} value={index}>
                        {goal.title}
                    </option>
                ))}
            </select>

            <button>
                <img />
            </button>
        </div>
    );
}

export default NavBar;