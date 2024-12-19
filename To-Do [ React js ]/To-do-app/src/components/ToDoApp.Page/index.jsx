import React, { useState } from 'react';
import ToDoItem from '../ToDoItem';
import ToDoCompletedItem from '../ToDoCompletedItem';

const ToDoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
      setTask(""); 
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
      <div className="todo-container">
        <div className="todo-leftcontainer">
          <h2>Add To Do...</h2>
          <textarea
            type="text"
            placeholder="Enter Your Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={addTask}>Add To Do</button>
        </div>

        <div className="todo-rightcontainer">
          <div className="todo-list-container">
            <h3>To Do List</h3>
            {tasks.filter((task) => !task.completed).map((task) => (
              <ToDoItem
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                toggleComplete={toggleComplete}
              />
            ))}
          </div>

          <div className="todo-completed-list-container">
            <h3>Completed</h3>
            {tasks.filter((task) => task.completed).map((task) => (
              <ToDoCompletedItem
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                toggleComplete={toggleComplete}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoApp;
