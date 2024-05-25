import { Link, NavLink } from "react-router-dom";
import { navlinks } from "./Navdata";

export default function Nav({ hideNav }) {
  return (
    <nav
      className={`${
        hideNav ? "hidden" : ""
      } absolute md:static md:block md:mx-0 top-0 right-0 left-0 mx-auto flex justify-center  h-[50vh] md:h-full md:rounded-3xl bg-white`}
    >
      <ul className={"flex flex-col md:flex-row gap-14 pt-8 md:py-3 md:px-8 "}>

        
        {
          navlinks.map(({name, path}, index) => {
            return (
              <li className=" font-semibold text-xl md:text-[17px]" key={index}>
                <NavLink to={path} className={({isActive}) => isActive ? ' border-b-2 border-buttonblue pb-2 text-primary' : ''}>{name}</NavLink>
              </li>
            )
          })
        }
      </ul>
    </nav>
  );
}
