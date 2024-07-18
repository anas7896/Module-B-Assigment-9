import React, { useState } from 'react';
import './Todo.css';
import { IoIosAddCircle } from "react-icons/io";

const Todo = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [warning, setWarning] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === '') {
      setWarning('Please enter a task.');
    } else {
      setTasks([...tasks, task]);
      setTask('');
      setWarning('');
    }
  };

  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleEdit = (index) => {
    const newTask = prompt("Edit task:", tasks[index]);
    if (newTask !== null) {
      const newTasks = tasks.map((task, i) => (i === index ? newTask : task));
      setTasks(newTasks);
    }
  };

  return (
    <div className="container">
      <header>
        <h1>TODO APP</h1>
        <form id="new-task-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="new-task-input"
            id="new-task-input"
            placeholder="What do you have planned?"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button type="submit" id="new-task-submit">
            <IoIosAddCircle style={{fontSize:'45'}}/>
          </button>
        </form>
        {warning && <p className="warning">{warning}</p>}
      </header>
      <main>
        <section className="task-list">
          <div id="tasks">
            {tasks.map((task, index) => (
              <div key={index} className="task">
                <div className="content">
                  <input
                    type="text"
                    className="text"
                    value={task}
                    readOnly
                  />
                </div>
                <div className="actions">
                  <button className="edit" onClick={() => handleEdit(index)}>Edit</button>
                  <button className="delete" onClick={() => handleDelete(index)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Todo;
