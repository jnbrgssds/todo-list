import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="bg-stone-950 min-h-screen flex items-center justify-center">
      <div className="bg-stone-600 shadow-lg rounded-lg p-6 w-96">
        <h1 className="text-2xl font-bold text-center mb-4">Lista de Tarefas</h1>
        <div className="mb-4">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Adicione uma nova tarefa"
            className="border border-gray-300 rounded w-full p-2 mb-2 focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={addTask}
            className="bg-amber-800 text-white px-4 py-2 rounded w-full hover:bg-blue-600"
          >
            Adicionar
          </button>
        </div>
        <ul className="space-y-2">
          {tasks.map((t, index) => (
            <li key={index} className="bg-gray-200 p-2 rounded flex justify-between">
              {t}
              <button
                onClick={() => removeTask(index)}
                className="text-red-500 hover:text-red-700"
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
