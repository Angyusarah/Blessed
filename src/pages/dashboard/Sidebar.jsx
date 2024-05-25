import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Sidebar = () => {
  return (
    <aside className="bg-buttonblue sticky top-0 h-screen py-6 px-16 flex flex-col gap-9 items-center basis-[25%] rounded-r-3xl">
      <img src={logo} alt={logo} />
      <nav className="flex flex-col gap-6">
        <Link to={""} className="">
          <span>Dashboard</span>
        </Link>
        <Link to={""} className="">
          <span>Wishes</span>
        </Link>
        <Link to={""} className="">
          <span>Gallery</span>
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
