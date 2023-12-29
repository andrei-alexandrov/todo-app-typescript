import { useState, useRef, useEffect } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from "../../model";
import Button from "../Button/Button";

import "./SingleTodo.css";

type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string | number>(todo.todo)

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit])

    const handleIsDone = (id: number) => {
        if (!edit) {
            setTodos(todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
        }
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();

        setTodos(todos.map((todo) => {
            return (
                todo.id === id ? { ...todo, todo: editTodo } : todo
            )
        }))
        setEdit(false);
    }

    return (
        <form className="todos-single" onSubmit={(e) => handleEdit(e, todo.id)}>
            {edit ?
                <div className="edit-wrapper">
                    <input
                        className="todos-single-text"
                        ref={inputRef}
                        value={editTodo}
                        onChange={(e) => setEditTodo(e.target.value)}
                    />
                    <Button isEditButton={true}>Ok</Button>
                </div>
                :
                todo.isDone ?
                    <s style={{ color: "green" }} className="todos-single-text">{todo.todo}</s>
                    :
                    <span className="todos-single-text">{todo.todo}</span>
            }

            <div className="icon-wrapper">
                <span
                    className="edit-icon"
                    onClick={() => {
                        if (!edit && !todo.isDone) {
                            setEdit(!edit);
                        }
                    }}
                >
                    <AiFillEdit />
                </span>

                <span
                    className="delete-icon"
                    onClick={() => handleDelete(todo.id)}
                >
                    <AiFillDelete />
                </span>

                <span
                    className="isDone-icon"
                    onClick={() => handleIsDone(todo.id)}
                ><MdDone />
                </span>
            </div>
        </form>
    )
}

export default SingleTodo;