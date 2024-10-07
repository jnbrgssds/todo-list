import React, { useState } from 'react';
import './App.css';
import background from './assets/bg3.jpg';

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
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center"  style={{ backgroundImage: `url(${background})` }}>
      <div className="bg-slate-900 bg-opacity-80 shadow-lg rounded-lg p-6 w-96">
        <h1 className="text-2xl font-bold text-white text-center mb-4 font-lora">Lista de Tarefas</h1>
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
            className="bg-rose-700 text-white px-4 py-2 rounded w-full hover:bg-rose-600 font-lora"
          >
            Adicionar
          </button>
        </div>
        <ul className="space-y-2">
          {tasks.map((t, index) => (
            <li key={index} className="bg-gray-200 p-2 rounded flex justify-between font-bold font-lora">
              {t}
              <button
                onClick={() => removeTask(index)}
                className="text-red-500 font-bold hover:text-red-700 font-lora"
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
