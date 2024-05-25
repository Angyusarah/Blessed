import m1 from "../../assets/max.png";

const Posts = () => {
  return (
    <div className="flex gap-5 my-5 justify-center items-center">
      <div>
        <div className="w-[60px] md:w-20 h-[60px] md:h-20 border-2 border-buttonblue rounded-full">
          <img className="w-full h-full rounded-full" src={m1} alt="" />
        </div>
      </div>
      <div>
        <h2 className=" font-semibold text-xl">Name</h2>
        <p className="my-1 md:my-3 text-base md:text-xl">
         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
          eligendi dolorem facere illum animi consectetur architecto laudantium
          unde esse explicabo!"
        </p>
        <p className="text-xs md:text-base">May 20, 2024 at 1:00am</p>
      </div>
    </div>
  );
};

export default Posts;
