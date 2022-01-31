import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div class="navbar text-neutral-content navColor z-10 shadow-xl h-fit fixed min-w-full">
      <div class="flex-1 flex-row px-2 mx-2 ">
        <Link to="/">
          <img
            src="https://www.linkpicture.com/q/logo_105.png"
            alt="college logo"
            className=" w-10 md:w-16 "
          />
        </Link>
        <Link to="/">
          <div className="flex flex-col">
            <span class="md:text-2xl font-semibold ml-4 leading-relaxed hover:cursor-pointer">
              Bangalore Institute of Technology
            </span>
            <span class="md:text-xl font-regular ml-4 hover:cursor-pointer">
              Placement Cell
            </span>
          </div>
        </Link>
      </div>
      <div class="flex-none hidden px-2 mx-4 md:flex">
        <div class="flex items-stretch">
          <NavLink
            // className="btn btn-ghost btn-sm rounded-btn font-light ease-linear duration-300 text-base"
            className={(navData) =>
              navData.isActive
                ? "btn btn-ghost btn-sm px-2 rounded-md ease-linear duration-300 text-base text-transparent bg-clip-text bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500 border-b-2 border-b-orange-700"
                : "btn btn-ghost btn-sm rounded-btn font-light ease-linear duration-300 text-base"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? "btn btn-ghost btn-sm px-2 rounded-md ease-linear duration-300 text-base text-transparent bg-clip-text bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500 border-b-2 border-b-orange-700"
                : "btn btn-ghost btn-sm rounded-btn font-light ease-linear duration-300 text-base"
            }
            to="/company_details"
          >
            Company Details
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? "btn btn-ghost btn-sm px-2 rounded-md ease-linear duration-300 text-base text-transparent bg-clip-text bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500 border-b-2 border-b-orange-700"
                : "btn btn-ghost btn-sm rounded-btn font-light ease-linear duration-300 text-base"
            }
            to="/resources"
          >
            Resources
          </NavLink>
        </div>
      </div>
      <div class="flex-none hidden md:flex mr-3 ">
        <div class="dropdown dropdown-end">
          <div
            tabindex="0"
            className="btn-grad focus:-translate-y-1 ease-in duration-200 text-slate-100 hover:cursor-pointer"
          >
            Log In
          </div>
          <ul
            tabindex="0"
            class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 glassmorph"
          >
            <li>
              <Link to="/student_login">Student Login</Link>
            </li>
            <li>
              <Link to="/faculty_login">Faculty Login</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className=" flex-none md:hidden">
        <div class="dropdown dropdown-end">
          <div
            tabindex="0"
            class=" px-2 pt-1 pb-2 rounded-lg active:bg-slate-200 active:bg-opacity-20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-6 h-6 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </div>
          <ul
            tabindex="0"
            class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 dropdown-glass"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/company_details">Company Details</NavLink>
            </li>
            <li>
              <NavLink to="/resources">Resources</NavLink>
            </li>
            <li>
              <Link to="/student_login">Student Login</Link>
            </li>
            <li>
              <Link to="/faculty_login">Faculty Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
