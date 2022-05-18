import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: FC = () => {


  const {pathname} = useLocation();






  return (


        <nav className="flex justify-start list-none bg-gray-800 shadow-md" >
          <li className="hover:bg-gray-900">
            <Link className={`text-white py-3.5 block px-4  ${pathname === '/'&&"bg-emerald-500"}`} to="/">HTML</Link>
          </li>
          <li className="hover:bg-gray-900">
            <Link className={`text-white py-3.5 block px-4 ${pathname === '/tailwind'&&"bg-emerald-500"}`} to="/tailwind">Tailwind</Link>
          </li>
          <li className="hover:bg-gray-900">
            <Link className={`text-white py-3.5 block px-4 ${pathname === '/about'&&"bg-emerald-500"}`} to="/about">About</Link>
          </li>
        </nav>

  );
};



export default Navbar;
