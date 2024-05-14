import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import Nav from "./Nav.jsx";
import logo from "../assets/logo.png";
import Instagram from "../assets/instagram.png";
import Twitter from "../assets/twitter.png";
import  Facebook from "../assets/facebook.png";
import { Link } from "react-router-dom";



function Header() {
  const [isHidden, setIsHidden] = useState(false);

  const handleHamburger = () => {
    setIsHidden((prevState) => !prevState);
  };

  return (
    <header
      className={
        "flex justify-between pl-6 pr-14 relative items-center shadow-xl py-2"
      }>
      <Link to={"/"}><img src={logo} className={"object-contain h-14 w-14"} alt="" /></Link>
      <button
        onClick={handleHamburger}
        className={"absolute top-5 right-6 md:hidden z-20"}
      >
        {isHidden ? <RxHamburgerMenu /> : <AiOutlineClose />}
      </button>
      <Nav hideNav={isHidden} />

      <div className="hidden md:flex md:gap-8">
        <Link target="_blank" to="https://www.instagram.com/blessedsneh?igsh=MTAzZndjbTJrZ2k4ag=="><img src={Instagram} alt="" /></Link>
        <Link target="_blank" to="https://x.com/blessed_oguh?s=11"><img src={Twitter} alt="" /></Link>
        <Link target="_blank" to="https://www.facebook.com/share/b5Qd9R1y8YQFAUv7/?mibextid=LQQJ4d"><img src={Facebook} alt="" /></Link>
        
        
        
      </div>
    </header>
  );
}

export default Header;
