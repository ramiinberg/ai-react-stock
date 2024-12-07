interface DisabledButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const DisabledButton: React.FC<DisabledButtonProps> = ({
  children,
  onClick,
  disabled,
  className,
  ...rest
}) => {
  const defaultClasses =
    "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700";
  let buttonClasses = className ? className : defaultClasses;

  if (disabled) {
    buttonClasses += " opacity-50 cursor-not-allowed";
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default DisabledButton;
