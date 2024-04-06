import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

function NewTodoForm({ create }) {
    const [task, setTask] = useState("");

    const handleChange = evt => {
    setTask(evt.target.value);
    };

    const gatherInput = evt => {
    evt.preventDefault();
    create({ task, id: uuid() });
    setTask("");
    };

    return (
    <div>
        <form onSubmit={gatherInput}>
        <label htmlFor="task">Task:</label>
        <input
            id="task"
            className="m-3"
            name="task"
            type="text"
            onChange={handleChange}
            value={task}
        />
        <button>Add</button>
        </form>
        </div>
    );
}

export default NewTodoForm;
