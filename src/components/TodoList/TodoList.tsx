import "./TodoList.css";
import { Todo } from "../../model";
import SingleTodo from "../SingleTodo/SingleTodo";
import { type ReactNode } from "react";
import InfoBox from "../InfoBox/InfoBox";

type TodoProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<TodoProps> = ({ todos, setTodos }) => {
  let warningBox: ReactNode;

  if (todos.length === 0) {
    return (
      <InfoBox mode="hint"> You have no goals yet. Start adding some!</InfoBox>
    );
  }

  if (todos.length >= 9) {
    warningBox = (
      <InfoBox mode="warning" severity="medium">
        You are collecting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    );
  }
  return (
    <>
      {warningBox}
      <div className="todos">
        {todos.map((todo) => {
          return (
            <SingleTodo
              todo={todo}
              key={todo.id}
              todos={todos}
              setTodos={setTodos}
            />
          );
        })}
      </div>
    </>
  );
};

export default TodoList;
