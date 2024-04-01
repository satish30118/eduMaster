import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import companyLogo from '../../assets/large.png'
import Logo from "./logo";

function Navbar() {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
 
  const handleLogout = () => {
    setAuth({ ...auth, user: null, token: "" });
    localStorage.removeItem("eduMentorInfo");
    navigate("/login")
    const timer = setTimeout(() => {
      alert("Logout Successfully!!");
    }, 100);

    return;
  };

  return (
    <nav className="bg-white  shadow-lg sticky w-full z-[3] border ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* <img
            src={companyLogo}
            className="h-10"
            alt="Flowbite Logo"
          /> */}
          <Logo/>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
            EduMentor
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white  dark:border-gray-700 items-center" >
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                aria-current="page"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/aboutus"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="contactus"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
              >
                Contact Us
              </Link>
            </li>
            {!auth?.token ? (
              <>
                <li>
                  <Link
                    to="/login"
                    className="border p-2 rounded-lg hover:bg-red-700 transition-all duration-300  text-white bg-red-600 px-3 "
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className=" border lg:p-2 px-3 hover:bg-blue-700 transition-all duration-300 bg-blue-600 text-white rounded-lg shadow-xl "
                  >
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to={`/dashboard/${auth?.user?.isEducator ? "educator" : "student"}`}
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
                  >
                    <img
                      src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                      alt=""
                      style={{ width: "40px", height: "40px" }}
                    />
                  </Link>
                </li>
                <li>
                  <button style={{ color: "red" }} onClick={handleLogout}>
                    <i className="fas fa-sign-out"></i>
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
