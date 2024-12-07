interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    className,
    ...rest
}) => {
    const defaultClasses =
        "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700";
    const buttonClasses = className ? className : defaultClasses;

    return (
        <button type="button" onClick={onClick} className={buttonClasses} {...rest}>
            {children}
        </button>
    );
};

export default Button;
