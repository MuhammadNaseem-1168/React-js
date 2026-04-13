import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MapPin } from "lucide-react";
import { FaCaretDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { CgClose } from "react-icons/cg";
import { SignInButton, UserButton, useUser } from "@clerk/react";

const Navbar = ({ location, getLocation, openDropdown, setOpenDropdown }) => {
  const { isSignedIn } = useUser();

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <div
      className="bg-white
    py-3 shadow-2xl"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo section */}
        <div className=" flex gap-7 items-center">
          <Link to={"/"}>
            <h1 className="font-bold text-3xl">
              <span className="text-red-500 font-serif">Z</span>aptro
            </h1>
          </Link>
          <div className="flex gap-1 cursor-pointer text-gray-600 item-center">
            <MapPin className="text-red-500" />
            <span className="font-semibold">
              {location ? (
                <div className="-space-y-2">
                  <p>{location.county}</p>
                  <p>{location.state}</p>
                </div>
              ) : (
                "Add Address"
              )}
            </span>
            <FaCaretDown onClick={toggleDropdown} />
          </div>
          {openDropdown ? (
            <div className="w-64 h-max shadow-2xl z-50 bg-white fixed top-16  border-2 p-5 border-gray-200 rounded-md">
              <h1 className="font-semibold mb-4 text-xl flex justify-between">
                Change Location
                <span onClick={toggleDropdown}>
                  <CgClose />
                </span>
              </h1>
              <button
                onClick={getLocation}
                className="bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-red-700 "
              >
                Detect my location
              </button>
            </div>
          ) : null}
        </div>
        {/* Menu section */}
        <nav className="flex gap-7 items-center">
          <ul className="flex gap-7 items-center text-xl font-semibold">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 transaction-all border-red-500" : "text-black"} cursor-pointer`
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to={"/products"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 transaction-all border-red-500" : "text-black"} cursor-pointer`
              }
            >
              <li>Products</li>
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 transaction-all border-red-500" : "text-black"} cursor-pointer`
              }
            >
              <li>About</li>
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 transaction-all border-red-500" : "text-black"} cursor-pointer`
              }
            >
              <li>Contact</li>
            </NavLink>
          </ul>

          <Link to={"/cart"} className="relative">
            <IoCartOutline className="h-7 w-7" />
            <span className="bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white">
              0
            </span>
          </Link>
          <div>
            {!isSignedIn && (
              <SignInButton mode="modal">
                <button className="bg-red-600 text-white py-1 px-3 rounded-md cursor-pointer">
                  Sign In
                </button>
              </SignInButton>
            )}

            {isSignedIn && (
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "border-2 border-red-500",
                  },
                }}
              />
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
