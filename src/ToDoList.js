import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewToDoForm";
import "./ToDoList.css"

function TodoList() {
    const [todos, setTodos] = useState([]);


  // add a new todo
    const create = newTodo => {
    setTodos(todos => [...todos, newTodo]);
    };



  // delete a todo by id
    const remove = id => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
    };

    const edit = (id, updatedTask) => {
        setTodos(todos =>
            todos.map(todo =>
                todo.id === id ? { ...todo, task: updatedTask } : todo
        )
        );
    };

    const todoComponents = todos.map(todo => (
    <Todo
        remove={remove}
        key={todo.id}
        id={todo.id}
        task={todo.task}
        edit={edit}
    />
));

return (
    <div>
        <p> To Do List </p>
        <hr></hr>
        <NewTodoForm create={create} />
        <ul>{todoComponents}</ul>
    </div>
);
}

export default TodoList;
