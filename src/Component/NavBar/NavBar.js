import React from "react";

import "./nav.css";

import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../contextApi/AuthContext";



const NavBar = () => {
  let navigate=useNavigate()
  let { user, logOut } = UserAuth();

  let logoutttt = async () => {
    user && (await logOut());
    navigate("/")
  };

  console.log("user ====> ", user);

  return (
    <div className="nabBarr flex justify-between items-center p-6 absolute w-full z-[100] ">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NetFlix
        </h1>
      </Link>
      <div className="buttonsDiv text-center">
        {user && (
          <>
            <h1 className="text-white bg-red-600 md:mt-3 mt-0  px-6 py-2 cursor-pointer rounded">
              Welcome <span className="ml-1">{user.email}</span>
            </h1>

            <Link to="/favourite">
              <button className="text-white bg-transparent border hover:bg-white-600   px-6 py-2 cursor-pointer rounded mr-3">
              Favourite Move
              </button>
            </Link>
          </>
        )}
        <Link to={!user && "/loginPage"}>
          <button
            className="text-white bg-transparent border hover:bg-white-600   px-6 py-2 cursor-pointer rounded m-1"
            onClick={() => {
              logoutttt();
            }}
          >
            {!user ? "Sign In" : "Sign Out"}
          </button>
        </Link>
        <Link to="/createPage">
          {!user && (
            <button className="text-white bg-red-600 md:mt-3 px-6 py-2 cursor-pointer m-1 rounded">
              Sign Up
            </button>
          )}
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
