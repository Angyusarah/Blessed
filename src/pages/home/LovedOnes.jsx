import Heading from "../../components/Heading";
import { useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Data from "./LovedonesData";

const LovedOnes = () => {
  const moveToCenter = (arr, selectedIndex) => {
    if (selectedIndex < 0 || selectedIndex >= arr.length) {
      throw new Error("Selected index is out of bounds");
    }
    const newArr = [...arr];
    const selectedElement = newArr.splice(selectedIndex, 1)[0];
    const middleIndex = Math.floor(newArr.length / 2);
    newArr.splice(middleIndex, 0, selectedElement);
    return newArr;
  };

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

  const Pagination = ({ data, onPageChange }) => {
    return (
      <div className="flex items-center justify-center my-5 ">
        {data.map((item, index) => (
          <div>
            <div
              key={index}
              className={`h-[50px] w-[50px] md:w-[60px] md:h-[60px] md:mx-2 border-[3px] border-lightblue rounded-full overflow-hidden 
          cursor-pointer transition-transform duration-300
          ${
            index === Math.floor(data.length / 2)
              ? "md:border-[5px] transform scale-150"
              : "border-transparent"
          }`}
              onClick={() => onPageChange(index)}
            >
              <img
                src={`../src/assets/${item.coverImg}`}
                alt={`Page ${index + 1}`}
                className=" w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
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

    const handlePageChange = (itemIndex) => {
      if (itemIndex < 0 || itemIndex >= dataToDisplay.length) return;
      const newData = moveToCenter(dataToDisplay, itemIndex);
      const newIndex = newData.findIndex(
        (item) => item.id === dataToDisplay[itemIndex].id
      );
      setCurrentItemIndex(newIndex);
      setDataToDisplay(newData);
    };

    const handleNext = () => {
      setDataToDisplay(rotateArrayLeft([...dataToDisplay]));
    };

    const handlePrev = () => {
      setDataToDisplay(rotateArrayRight([...dataToDisplay]));
    };
    return (
      <>
        <div className="text-center flex flex-col justify-center items-center w-[100%] lg:px-[100px]">
          <div className="flex justify-between">
            <button
              onClick={() => handlePrev(dataToDisplay, currentItemIndex)}
              className=" text-5xl md:text-[70px] text-lightblue"
            >
              <FaAngleLeft />
            </button>
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
         <div className=" flex flex-col justify-center items-center">
         <div className=" border-2 border-lightblue my-[2px] md:my-1 w-[30px] md:w-[40px] h-[30px] md:h-[40px] rounded-[20px]"></div>
          <div className=" border-2 border-lightblue my-[2px] md:my-1 w-[20px] h-[20px] rounded-[10px]"></div>
          <div className=" border-2 border-lightblue my-[2px] md:my-1 w-[10px]  h-[10px] rounded-[5px]"></div>
         </div>
          <Pagination data={dataToDisplay} onPageChange={handlePageChange} />
          <p className=" font-semibold text-xl md:text-2xl tracking-wide"> {dataToDisplay[currentItemIndex].title}</p>
        </div>
      </>
    );
  };

  return (
    <div className="">
      <Heading
        heading="Words from Loved Ones"
        extraClass={"text-[20px] leading-[30px] mb-3 text-center"}
      />

      <p className="text-center text-xl px-6">
        Messages from those who cherish Chukwuemeka the most. Scroll through to
        read heartfelt words from his family!
      </p>

      <div className=" md:flex justify-between md:w-[100%]">
        <PaginationItems />
      </div>
    </div>
  );
};

export default LovedOnes;
