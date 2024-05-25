import data from "./FriendsData";
import Heading from "../../components/Heading";
import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

function Friends() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPosts = data.length;

  const pageSize = 1;
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
       <Heading
        heading="Words from Friends"
        extraClass={"text-[20px] leading-[30px] mb-3 text-center"}
      />

      <p className="text-center text-xl px-6">
        Explore to see wishes from some of Chukwuemeka's closest friends
      </p>
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
            <div className=" flex-col text-center shadow-lg border-[3px] w-[80%] md:w-[60%] border-lightblue rounded-[30px] px-5 md:px-10 lg:px-20 mb-5 flex  items-center justify-center  my-10 md:text-[20px] py-5 ">
              <div className="w-[60px] md:w-20 h-[60px] md:h-20 border-2 border-buttonblue rounded-full">
                <img
                  className="w-full h-full rounded-full"
                  src={`../../assets/${data.coverImg}`}
                  alt=""
                />
              </div>
              <h2 className=" font-semibold text-xl">{data.title}</h2>
              <p className="my-1 md:my-3 text-base md:text-xl">
                {data.description}
              </p>
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
