import Wishes1 from "../../assets/wishes1.png";
import Wishes2 from "../../assets/wishes2.png";
import Button from "../../components/Button";

const Form = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-10 px-6 py-[80px] lg:justify-center lg:gap-[50px]">
      <img src={Wishes1} className=" w-[200px] h-[120px] self-end mb-5 lg:h-[200px] lg:w-[300px]" alt="" />
      

      <div className=" w-full  rounded-xl flex flex-col gap-4 bg-offwhite">
        <div className="text-center">
          <h1 className=" font-semibold text-2xl">Share Your Messages of Love and Joy.</h1>
          <p className="text-[17px]">Leave your heartfelt wishes below.</p>
        </div>

        <div className=" bg-white p-5 rounded-2xl border-[1px] border-buttonblue flex flex-col">
          <div className="my-5">
            <label htmlFor="message" className=" font-medium">Wishes:</label>
            <textarea
              id="message"
              type="text"
              placeholder="Write your wishes..."
              className=" w-full p-4 border-[1px] focus:border-buttonblue focus:outline-none focus:ring-0 h-[8rem] lg:h-[10rem] mt-3"
            />
          </div>
          <fieldset>
            <label htmlFor="name" className=" font-medium"> Name (Optional):</label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              className="focus:border-buttonblue border-[1px] focus:outline-none p-4 md:py-6 h-[2.25rem] lg:h-[3.6rem] w-full border-2 mt-3"
            />
          </fieldset>
         
         <Button className={"tracking-wider font-bold lg:mt-10 my-5 self-end py-[5px]"}>
         <input type="submit" value="Share Your Love" />
        </Button>
        </div>
        
      </div>
      <img src={Wishes2} className=" w-[200px] h-[150px] self-start mb-5 lg:h-[250px] lg:w-[300px]" alt="" />
    </div>
  );
};

export default Form;
