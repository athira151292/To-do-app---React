import React from "react";
import { DeleteOutlined, EditOutlined } from '@mui/icons-material';

const Task = () => {
    return (
        <div className="task">
            <p></p>
            <button><DeleteOutlined /></button>
            <button><EditOutlined /></button>
        </div>
    )
}

export default Task;