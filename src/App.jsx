import React, { useState } from 'react';
import './App.css'
import Todo from './Todo/Todo';
import Form from './Form/Form';

const App = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <div className='btnn'>
      <button className='todobtn' onClick={() => setActiveComponent('todo')}>Show Todo</button>
      <button className='formbtn' onClick={() => setActiveComponent('form')}>Show Form</button>

      {activeComponent === 'todo' && <Todo />}
      {activeComponent === 'form' && <Form />}
    </div>
  );
};

export default App;
