import { useState } from 'react';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';
import './index.css';

function App() {

  const [todos, setTodos] = useState([])
  
  const addTask = (userInput) => {
    if (userInput){
      const newTodo = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        completed: false
      }
      setTodos([...todos, newTodo])
    }
  }

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const handleToggle = (id) =>{
    setTodos([
      ...todos.map((todo) => 
        todo.id === id ? {...todo, completed: !todo.completed} : {...todo}
      )
    ])
  }

  return (
    <div className="App">
      <header>
        <h2>Количество задач № {todos.length}</h2>
      </header>

      {todos.map((todo) => {
        return(
          <ToDo
            todo={todo}
            key = {todo.id}
            toggleTask={handleToggle}
            removeTask={removeTask}
          />
        )
      })
      }
      <ToDoForm
        addTask={addTask}
      />

    </div>
  );
}

export default App;
