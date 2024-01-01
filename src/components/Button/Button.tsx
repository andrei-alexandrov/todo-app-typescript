import "./Button.css";

type Props = {
    children: string;
    styleBtn: string;
}

export default function Button({ children, styleBtn }: Props) {
    return (
        <button
            className={styleBtn}
            type="submit"
        >
            {children}
        </button>
    )
}