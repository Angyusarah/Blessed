import PropTypes from "prop-types";

const Button = ({ children, onClick, className, cleanSlate = false }) => {
  return (
    <button
      onClick={onClick}
      className={`${cleanSlate ? className : `bg-blue-600 md:px-8 md:py-3 px-5 py- rounded-[80px] text-white ${className}`}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  cleanSlate: PropTypes.bool,
};
export default Button;
