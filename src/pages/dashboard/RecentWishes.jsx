import { Link } from "react-router-dom";
import Card from "./Card";
import { data } from "./wishesData";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const RecentWishes = () => {
  const [isSeeAll, setIsSeeAll] = useState(false);

  const handleClick = () => {
    setIsSeeAll(!isSeeAll);
  };
  return (
    <Card className={"w-[92%] text-primary font-inter px-11"}>
      <div className=" py-2 border-b-2 border-gray">
        <p className=" font-semibold text-lg">Recent Wishes</p>
        <div className="flex justify-between">
          <span>Wishes Highlights: Recent Updates Revealed</span>
          <Link
            onClick={handleClick}
            className="underline text-buttonblue text-[16px] font-medium"
          >
            {isSeeAll ? "See Less" : "See All"}
          </Link>
        </div>
      </div>
      {!isSeeAll &&
        data.slice(5).map(({ fullname, wish, date }, index) => (
          <div key={index} className=" flex flex-col gap-[0.5px] ">
            <div className="flex justify-between items-center">
              <p className=" font-semibold text-[16px] py-3">{fullname}</p>
              <BsThreeDotsVertical  className=" text-lg cursor-pointer"/>
            </div>
            <div className="flex flex-col gap-1">
              <p>{wish}</p>
              <p>{date}</p>
            </div>
          </div>
        ))}

      {isSeeAll &&
        data.map(({ fullname, wish, date }, index) => (
          <div key={index} className=" flex flex-col gap-[0.5px] ">
            <div className="flex justify-between items-center">
              <p className=" font-semibold text-[16px] py-3">{fullname}</p>
              <BsThreeDotsVertical  className=" text-lg cursor-pointer"/>
            </div>
            <div className="flex flex-col gap-1">
              <p>{wish}</p>
              <p>{date}</p>
            </div>
          </div>
        ))}
    </Card>
  );
};

export default RecentWishes;
