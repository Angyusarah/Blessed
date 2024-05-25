import PropTypes from "prop-types";
import { IoMdClose } from "react-icons/io";

const Modal = ({ children, onClose, open }) => {
  if (!open) return null;
  return (
    <>
      <div
        className={
          "fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2000] bg-veryLightGreen p-6 rounded-[1.25rem]"
        }
      >
        {children}
      </div>
      <button
        onClick={onClose}
        className={
          "z-[3000] p-2.5 bg-mainGreen rounded-full fixed top-[15%] left-[55%] -translate-x-1/2 -translate-y-1/2"
        }
      >
        <IoMdClose color="#fff" size={20} />
      </button>
      <div
        className={"fixed top-0 left-0 right-0 bottom-0 bg-lightblue z-[1000]"}
      ></div>
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
