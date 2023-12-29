import "./Button.css";

type Props = {
    children: string;
    isEditButton: boolean
}

export default function Button({ children, isEditButton }: Props) {
    const buttonStyles = isEditButton ? "edit-submit-btn" : "input-submit-btn";
    return (
        <button
            className={buttonStyles}
            type="submit"
        >
            {children}
        </button>
    )
}