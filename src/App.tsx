import React, { useState } from "react";
import InputField from "./components/InputField/InputField";
import useLocalStorage from "./useLocalStorage";

import "./App.css";
import "./globalStyles.css";

import { Todo } from "./model";
import TodoList from "./components/TodoList/TodoList";
import GlowingText from "./components/GlowingText/GlowingText";

const LOCAL_STORAGE_KEY = "todos";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string | number>("");
  const [todos, setTodos] = useLocalStorage<Todo[]>(LOCAL_STORAGE_KEY, []);

  // useEffect(() => {
  //   const storedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
  //   if (storedTodos) {
  //     setTodos(JSON.parse(storedTodos));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  // }, [todos]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos((todos) => {
        return [...todos, { id: Date.now(), todo: todo, isDone: false }];
      });
      setTodo("");
    }
  };
  console.log(todos);

  // const handleAdd = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (todo) {
  //     setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }])
  //   }
  // }

  return (
    <div className="app">
      <GlowingText title="Your daily tasks" />
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
