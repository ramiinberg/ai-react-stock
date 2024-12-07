interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  type = "button",
  ...rest
}) => {
  const defaultClasses =
    "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700";
  const buttonClasses = className ? className : defaultClasses;

  return (
    <button type={type} onClick={onClick} className={buttonClasses} {...rest}>
      {children}
    </button>
  );
};

export default Button;
