import React, { useState } from "react";
import InputField from "./components/InputField/InputField";
import useLocalStorage from "./utils/useLocalStorage";

import "./App.css";
import "./globalStyles.css";

import { Todo } from "./model";
import TodoList from "./components/TodoList/TodoList";
import GlowingText from "./components/GlowingText/GlowingText";

const LOCAL_STORAGE_KEY = "todos";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string | number>("");
  const [todos, setTodos] = useLocalStorage<Todo[]>(LOCAL_STORAGE_KEY, []);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos((todos) => {
        return [...todos, { id: Date.now(), todo: todo, isDone: false }];
      });
      setTodo("");
    }
  };

  return (
    <div className="app">
      <GlowingText title="Your daily tasks" />
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
