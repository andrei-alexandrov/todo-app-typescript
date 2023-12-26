import React, { useRef } from "react";
import "./InputField.css";

interface Props {
    todo: string | number,
    setTodo: React.Dispatch<React.SetStateAction<string | number>>
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form className="input" onSubmit={(e) => {
            handleAdd(e);
            inputRef.current?.blur();
        }}>
            <input
                className="input-box"
                ref={inputRef}
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Enter a task"
            />
            <button
                className="input-submit"
                type="submit"
            >
                Go
            </button>
        </form>
    )
}

export default InputField;