import "./TodoList.css";
import { Todo } from "../../model";
import SingleTodo from "../SingleTodo/SingleTodo";

interface Props {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    return (
        <div className="todos">
            {todos.map((todo) => {
                return (
                    <SingleTodo
                        todo={todo}
                        key={todo.id}
                        todos={todos}
                        setTodos={setTodos}
                    />
                )
            })}
        </div>
    )
}

export default TodoList;