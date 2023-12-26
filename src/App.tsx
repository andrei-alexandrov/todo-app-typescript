import React, { useState, useEffect } from 'react';
import InputField from './components/InputField/InputField';

import './App.css';
import { Todo } from './model';
import TodoList from './components/TodoList/TodoList';
import GlowingText from './components/GlowingText/GlowingText';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string | number>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos((todos) => {
        return (
          [...todos, { id: Date.now(), todo: todo, isDone: false }]
        )
      })
      setTodo("");
    }
  }
  console.log(todos)

  // const handleAdd = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (todo) {
  //     setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }])
  //   }
  // }

  return (
    <div className="app">
      {/* <span className="heading">Your daily tasks</span> */}
      <GlowingText title="Your daily tasks" />
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
