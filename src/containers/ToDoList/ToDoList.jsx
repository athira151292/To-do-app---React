import React from "react";
import AddTask from "../../components/AddTask/AddTask";
import TaskList from "../../components/TaskList/TaskList";
import DeleteAll from "../../components/TaskList/DeleteAll/DeleteAll";

const ToDoList = () => {
    return (
        <>
            <AddTask />
            <TaskList />
            <DeleteAll />
        </>
    );
}

export default ToDoList;