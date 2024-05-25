import Card from "./Card";
import menuIcon from "../../assets/menu-board.png";
import frame from "../../assets/frame.png";
import { CiCircleInfo } from "react-icons/ci";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import RecentWishes from "./RecentWishes";

const Dashboard = () => {
  return (
    <section className=" font-inter text-gray   flex flex-col w-full gap-5">
      <h2 className=" text-xl font-semibold text-primary">Dashboard</h2>
      <div className=" flex gap-6 w-full ">
        <Card className="flex flex-col gap-4 px-6">
          <div className="flex justify-between items-center gap-12">
            <span className="font-bold text-[16px]">Wishes</span>
            <img src={menuIcon} alt={menuIcon} />
          </div>
          <div className="flex flex-col gap-2">
            <span className=" text-primary text-[32px] font-bold leading-[38px]">
              92
            </span>
            <div className="flex gap-3 items-center">
              <CiCircleInfo />
              <span>Absolute No. Of Wishes</span>
            </div>
          </div>
          <LineChart />
        </Card>
        <Card className="flex flex-col gap-4">
          <div className="flex justify-between items-center gap-8">
            <span className="font-bold text-[16px]"> Deleted Wishes</span>
            <img src={frame} alt={frame} />
          </div>
          <div className="flex flex-col gap-2">
            <span className=" text-primary text-[32px] font-bold leading-[38px]">
              10
            </span>
            <div className="flex gap-3 items-center">
              <CiCircleInfo />
              <span> No. Of Wishes</span>
            </div>
          </div>
          <BarChart />
        </Card>
      </div>
      <RecentWishes />
    </section>
  );
};

export default Dashboard;
