import React, { useRef } from "react";
import "./InputField.css";
import Button from "../Button/Button";

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
            <Button styleBtn="input-submit-btn">Go</Button>
        </form>
    )
}

export default InputField;