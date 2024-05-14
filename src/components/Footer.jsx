import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import Button from "./Button";
import Instagram from "../assets/instagram.png";
import Twitter from "../assets/twitter.png";
import Facebook from "../assets/facebook.png";

const Footer = () => {
  return (
    <footer className={"pt-10 "}>
      <div className="md:flex gap-10 ">
        <div className="md:basis-3/7 flex flex-col pt-5 md:pt-0 justify-center items-center lg:basis-2/5 md:pl-[80px] pl-6">
          <img src={Logo} className=" w-[80px] md:w-[100px]" alt="" />
          <p className=" text-xl">
            Explore cherished memories in our gallery. Click below to relive
            moments celebrating{" "}
            <span className=" font-curly font-[900]">Chukwuemeka's</span>{" "}
            special day!
          </p>
          <Button className={"tracking-wider font-bold py-2 mt-7 mb-[40px] md:mb-5"}>
            <Link to={"/wishes"}> Share Your Love</Link>
          </Button>
        </div>

        <div className="rounded-t-[70px] border-r-0 border-b-0 flex flex-col border-solid border-2 border-buttonblue
                         md:rounded-tr-none md:justify-around md:gap-10 
                         md:basis-3/5 lg:justify-between lg:pt-10 lg:items-center">
          <div className=" flex gap-8 justify-between items-center m-5 md:m-0 lg:gap-[100px]">
            <div className="text-left">
              <h3 className="font-semibold text-sm mt-5 mb-2 text-buttonblue lg:text-xl">
                CONTACT
              </h3>
              <p className="text-xs md:text-[17px] lg:text-base">+234 91 3223 4570</p>
              <p className="text-xs md:text-[17px lg:text-base
              ]">angyusarah1@gmail.com</p>
            </div>

            <div className="text-left">
              <h3 className="font-semibold text-sm mb-2 md:mt-0 text-buttonblue lg:text-xl">
                FOLLOW US
              </h3>
              <div className="hidden md:flex md:gap-5">
                <div className="flex justify-center items-center  rounded-full border-[1px] border-buttonblue p-4">
                  <Link
                    target="_blank"
                    to="https://www.instagram.com/girl_smileeyyy?igsh=OXZ6OG02YnV2bG5t&utm_source=qr"
                  >
                    <img className="w-5 h-5" src={Instagram} alt="" />
                  </Link>
                </div>

                <div className="  rounded-full border-[1px] border-buttonblue p-4">
                  <Link target="_blank" to="https://twitter.com/Angyu_sarah">
                    <img src={Twitter} alt="" />
                  </Link>
                </div>
                <div className="  rounded-full border-[1px] border-buttonblue p-4">
                  <Link
                    target="_blank"
                    to="https://www.facebook.com/share/Nwuh5QMQcBQLhgcG/?mibextid=LQQJ4d"
                  >
                    <img src={Facebook} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className=" text-xs mt-8 md:mt-0 text-center lg:text-base">
            <p>Designed and Developed by ANGYU SARAH</p>
            <p className="text-xs mb-5 lg:text-base">
              © 2024 -- Copyright{" "}
              <span className=" text-buttonblue">ANGYU SARAH</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
