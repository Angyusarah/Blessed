import Button from "../../components/Button";
// import HeroImage from "../../assets/heroImage.png";
import Herobg from "../../assets/herobg.png";
import MobileHeroBg from "../../assets/mobileHeroBg.png"
import HeroImage from "../../assets/heroImage.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className=" p-0 relative mb-[50px]">
      {/* mobile */}
      <div className="text-left  pt-[80px] md:hidden px-5 z-10">
        <h1 className=" text-primary font-inter font-[600] text-[22px] md:text-[25px] leading-8">
          Lights, camera, action! Welcome to the virtual stage set for
          <span className=" font-curly font-[900]"> Chukwuemeka's</span> spectacular birthday celebration. Let's make memories to
          last a lifetime!
        </h1>
        <p className="my-6 text-[16px] leading-6">
          Ready to add your personal touch? Click the button below to write a
          heartfelt birthday wish and make <span className=" font-curly font-[900]">Chukwuemeka's</span> day even more special!
        </p>

        <Button className={"tracking-wider py-2 font-semibold bg-buttonblue rounded-2xl"}>
          <Link to={"/wishes"}> Share Your Love</Link>
        </Button>

        <div className="w-[100%] flex justify-end">
          <img src={HeroImage} className=" w-[50%] " alt="" />
        </div>
        <img src={MobileHeroBg} className=" absolute z-[-1] top-0 left-0 h-[100%] w-full" alt="" />
      </div>


      {/* desktop */}
      <div className="hidden md:flex md:gap-12 md:px-10 lg:px-[100px] md:pt-[100px]">
        <div className=" md:basis-3/5 ">
          <h1 className=" text-primary font-mont font-[600] md:text-[30px] lg:text-[35px] leading-[35px]">Lights, camera, action! </h1>
          <h2 className=" text-primary font-mont font-[600] md:text-[30px] lg:text-[35px] leading-[35px]">
            Welcome to the virtual stage set for <span className=" font-curly font-[900]"> Chukwuemeka's </span>
            spectacular birthday celebration. Let's make memories
            to last a lifetime!
          </h2>
          <p className="my-8 md:text-xl lg:text-2xl leading-8">
            Ready to add your personal touch? Click the button below to write a
            heartfelt birthday wish and make <span className=" font-curly font-[900]"> Chukwuemeka's</span> day even more special!
          </p>
          <Button className={"tracking-wider font-bold lg:mt-10 md:mb-[60px]"}>
            <Link to={"/wishes"}> Share Your Love</Link>
          </Button>
        </div>

        <div className="md:w-[100%]  md:flex md:justify-center md:basis-2/5">
          <img src={HeroImage} className=" w-[90%] lg:w-[70%]" alt="" />
        </div>
        <img src={Herobg} className=" absolute z-[-1] top-0 left-0 h-[100%] w-full" alt="" />
      </div>

      
    </div>
  );
};

export default Hero;
