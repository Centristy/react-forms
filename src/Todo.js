import React, { useState } from "react";
import "./"

function Todo({ task = "default todo", id = "1", remove, edit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editTask, setEditTask] = useState(task);


    const handleDelete = () => remove(id);

    const handleEdit = () => {
        setIsEditing(edit => !edit);
    };

    const handleChange = evt => {
        setEditTask(evt.target.value);
    };

    const handleUpdate = evt => {
        evt.preventDefault();
        edit(id, editTask);
        setIsEditing(false);
    };


    let jsx = (
        <div>
          <li >{task} 
          <button className="m-3 edit" onClick={handleEdit}> Edit </button>
          <button className="delete" onClick={handleDelete}>X</button>
          </li>
        </div>
      );
    
      // todo view when editing
      if (isEditing) {
        jsx = (
          <div>
            <form onSubmit={handleUpdate}>
              <input type="text" value={editTask} onChange={handleChange} />
              <button>Update!</button>
            </form>
          </div>
        );
      }
    
      return jsx;
    }
    







export default Todo;