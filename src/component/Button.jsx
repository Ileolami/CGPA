/* eslint-disable react/prop-types */
const Button = ({ props, onClick, className, icon }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
    >
      {icon && <span className="button-icon">{icon}</span>}
      {props}
    </button>
  );
};

export default Button;
