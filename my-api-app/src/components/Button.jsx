
function Button({ children, onClick, color = "green", disabled = false }) {

  return (
    <button
      className={`common-btn ${color}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
