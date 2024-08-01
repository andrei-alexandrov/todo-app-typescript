import "./Button.css";

type ButtonProps = {
    children: string;
    styleBtn: string;
}

export default function Button({ children, styleBtn }: ButtonProps) {
    return (
        <button
            className={styleBtn}
            type="submit"
        >
            {children}
        </button>
    )
}