import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { BiSolidDashboard } from "react-icons/bi";
import { GrGallery } from "react-icons/gr";
import { TbMessage2Heart } from "react-icons/tb";

const Sidebar = () => {
  return (
    <aside className="bg-buttonblue text-transwhite text-lg sticky top-0 h-screen py-6 px-16 flex flex-col gap-9 items-center basis-[25%] rounded-r-3xl">
      <img src={logo} alt={logo} />
      <nav className="flex flex-col gap-6">
        <Link to={"/"} className=" flex itemes-center gap-6">
          <BiSolidDashboard className=" text-2xl" />
          <span>Dashboard</span>
        </Link>
        <Link to={""} className=" flex itemes-center gap-6">
          <TbMessage2Heart className=" text-2xl" />
          <span>Wishes</span>
        </Link>
        <Link to={""} className=" flex itemes-center gap-6">
          <GrGallery className=" text-2xl" />
          <span>Gallery</span>
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
