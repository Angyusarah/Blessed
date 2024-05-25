import propTypes from "prop-types";
const Card = ({ className, children }) => {
  return (
    <div className={` bg-white w-[45%] py-4 px-6  rounded-[16px] ${className}`}>
      {children}
    </div>
  );
};

export default Card;

Card.propTypes = {
  children: propTypes.node.isRequired,
  className: propTypes.string,
};
