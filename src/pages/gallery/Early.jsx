import data from "./PicturesData";
import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

function Friends() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPosts = data.length;

  const pageSize = 5;
  const pages = Math.floor(totalPosts / pageSize);

  const goToPrev = () => {
    const prevPage = Math.max(currentPage - 1, 1)
    if (prevPage <= 1 ){
        setCurrentPage(pages)
    } else {
        setCurrentPage(prevPage);
    }
  };

  const goToNext = () => {
    const nextPage = Math.min(currentPage + 1, pages);
    if (nextPage >= pages ){
        setCurrentPage(1)
    } else {
        setCurrentPage(nextPage);
    }
  };

  const start = pageSize * (currentPage - 1);
  const end = pageSize * currentPage;
  const postsPerPage = data.slice(start, end);

  const canGoPrev = currentPage > 1;
  const canGoNext = currentPage < pages;

  return (
    <div>
      <div className="flex justify-between lg:px-20">
        <button
          disabled={!canGoPrev}
          onClick={goToPrev}
          className=" text-5xl md:text-[70px] text-lightblue"
        >
          <FaAngleLeft />
        </button>

        {data &&
          postsPerPage.map((data) => (
            <div className="  shadow-lg border-[3px] w-[80%] md:w-[60%] border-lightblue rounded-[30px] mb-5 flex  items-center justify-center  my-10 md:text-[20px]  ">
              <img
                  className="w-[100%] h-full"
                  src={`../public/assets/${data.coverImg}`}
                  alt=""
                />
            </div>
          ))}

        <button
          disabled={!canGoNext}
          onClick={goToNext}
          className="text-5xl md:text-[70px] text-lightblue"
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
}

export default Friends;
