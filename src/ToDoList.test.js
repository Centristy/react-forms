import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ToDoList from "./ToDoList";

function addTask(todoList, task = "sleep") {
    const taskInput = todoList.getByLabelText("Task:");
    fireEvent.change(taskInput, { target: { value: task }});
    const submitButton = todoList.getByText("Add");
    fireEvent.click(submitButton);
}

it("renders without crashing", function() { // smoke test
    render(<ToDoList />);
});

it("can add a todo", function() {
    const list = render(<ToDoList />);
    addTask(list);

    expect(list.getByLabelText("Task:")).toHaveValue("");
    expect(list.getByText("sleep")).toBeInTheDocument();
    expect(list.getByText("edit")).toBeInTheDocument();
    expect(list.getByText("X")).toBeInTheDocument();
});