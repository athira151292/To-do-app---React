import React from "react";
import styled from './AddTask.module.scss';

const AddTask = () => {
    return (
        <div className={styled.addTask}>
            <input type="text" placeholder="Enter your task" />
            <button>Add</button>
        </div>
    );
}

export default AddTask;