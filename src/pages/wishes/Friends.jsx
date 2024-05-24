import data from "./FriendsData";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Friends = () => {
  const rotateArrayRight = (arr) => {
    if (arr.length === 0) return arr;
    const lastElement = arr.pop();
    return [lastElement, ...arr];
  };

  const rotateArrayLeft = (arr) => {
    if (arr.length === 0) return arr;
    const firstElement = arr.shift();
    return [...arr, firstElement];
  };

  const Cards = (props) => {
    return (
      <div className="flex gap-5 my-5 justify-center items-center">
        <div>
          <div className="w-[60px] md:w-20 h-[60px] md:h-20 border-2 border-buttonblue rounded-full">
            <img
              className="w-full h-full rounded-full"
              src={`../src/assets/${props.item.coverImg}`}
              alt=""
            />
          </div>
        </div>
        <div>
          <h2 className=" font-semibold text-xl">{props.item.title}</h2>
          <p className="my-1 md:my-3 text-base md:text-xl">
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
            eligendi dolorem facere illum animi consectetur architecto
            laudantium unde esse explicabo!"
          </p>
          <p className="text-xs md:text-base">May 20, 2024 at 1:00am</p>
        </div>
      </div>
    );
  };

  const PaginationItems = () => {
    const [currentItemIndex, setCurrentItemIndex] = useState(
      Math.floor(Data.length / 2)
    );
    const [dataToDisplay, setDataToDisplay] = useState(
      moveToCenter(Data, currentItemIndex)
    );

  const cards = data.map((item) => {
    return <Cards key={item.id} item={item} />;
  });
  return (
    <div className="flex justify-between">
      <button
        onClick={() => handlePrev(dataToDisplay, currentItemIndex)}
        className=" text-5xl md:text-[70px] text-lightblue"
      >
        <FaAngleLeft />
      </button>
      <section className="">{cards}</section>
      <div className=" shadow-lg border-[3px] w-[80%] md:w-[60%] border-lightblue rounded-[30px] px-5 md:px-20 mb-5 flex  items-center justify-center  my-10 md:text-[20px] py-10">
              <p>{dataToDisplay[currentItemIndex].description}</p>
             
            </div>
      <button
        onClick={() => handleNext(dataToDisplay, currentItemIndex)}
        className="text-5xl md:text-[70px] text-lightblue"
      >
        <FaAngleRight />
      </button>
    </div>
  );
};

export default Friends;
