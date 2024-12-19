import React from 'react';

const ToDoItem = ({ task, deleteTask, toggleComplete }) => {
  return (
    <>
      <div className='todoitem'> 
        <input
          type="checkbox"
          checked={task.completed} 
          onChange={() => toggleComplete(task.id)} 
        />

        <span style={{ 
          flex: 1 
          }}
        >
          {task.text}
        </span>

        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </>
  );
};

export default ToDoItem;
