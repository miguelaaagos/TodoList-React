import React from 'react';
import ToDo from './ToDo.jsx';


const ToDoList = ({ toDoList, handleToggle, handleFilter }) => {
    return (
        <div className='todo-list'>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                )
            })}
            <button style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>
        </div>
    );
};

export default ToDoList;