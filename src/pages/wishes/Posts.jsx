import { useEffect, useState } from "react";
import { getWish } from "../../helper/data";
import Button from "../../components/Button";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";


const Posts = () => {
    const [displayWish, setDisplayWish] = useState([])
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
      getWish().then((res) => {
        console.log(res)
          setDisplayWish(res.data.data)
      })
  }, [])


  const totalPosts = displayWish.length;

  const reverseWish = displayWish.reverse();
  
  const pageSize = 5;
  const pages = Math.floor((totalPosts / pageSize) + 1);

  const goToPrev = () => {
    const prevPage = Math.max(currentPage - 1, 1)
    console.log(prevPage)
        setCurrentPage(prevPage);
  };

  const goToNext = () => {
    const nextPage = Math.min(currentPage + 1, pages);
   console.log(postsPerPage)
        setCurrentPage(nextPage);
    
  };

  

  const start = pageSize * (currentPage - 1);
  const end = pageSize * currentPage;
  const postsPerPage = reverseWish.slice(start, end);



  const canGoPrev = currentPage > 1;
  const canGoNext = currentPage < pages;
    
    return ( <>
    {/* {displayWish.length > 0 && displayWish.reverse().map((item, i) => {
        return (
            //your jsx component
            <div className="flex  flex-col gap-5 justify-center items-start border-y-2 shadow-sm p-5" key={i}>
            <h2 className=" font-semibold text-xl">{item.fullName}</h2>
            <p className="my-1 md:my-3 text-base md:text-xl">
            {item.wish}
            </p>
           
        </div>
        )
    })} */}

{displayWish && postsPerPage.map((item, i) => (
                <div className="flex  flex-col gap-1 justify-center items-start border-y-2 shadow-sm p-5" key={i}>
                <h2 className=" font-semibold text-xl">{item.fullName}</h2>
                <p className="text-base md:text-xl">
                {item.wish}
                </p>
               
            </div>
            ))}

<div className="flex justify-center gap-3 lg:px-20">
        <Button
          disabled={!canGoPrev}
          onClick={goToPrev}
          className={"tracking-wider text-sm md:text-xl font-thin lg:mt-10 my-5 flex items-center justify-center gap-3 py-[5px]"}
        >
          {<FaArrowLeftLong/>} Prev
        </Button>

        <p>
                    {currentPage} of {pages}
                </p>

        <Button
          disabled={!canGoNext}
          onClick={goToNext}
          className={"tracking-wider text-sm md:text-xl font-thin lg:mt-10 my-5 flex items-center justify-center gap-3 py-[5px]"}
        >
         Next {<FaArrowRightLong />}
        </Button>
      </div>
    </> );
}
 
export default Posts;

    