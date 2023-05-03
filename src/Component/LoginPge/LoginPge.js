import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./LoginPage.css";

import { UserAuth } from "../../contextApi/AuthContext";

const LoginPge = () => {
  let { loginFun } = UserAuth();
  let [errorss, setErorr] = useState("");

  let navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let onSubmitFun = async () => {
    try {
      await loginFun(email, password);
      navigate("/");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error(error);
      setErorr(error.message);
      errorTime()
    }
  };

  let errorTime = () => {
    setTimeout(() => {
      document.getElementById("errorttt").style.display = "none";
      setErorr("");
    },2000);
  };

  return (
    <div className=" h-full w-full ">
      <img
        className="absolute w-full h-full object-cover "
        src="https://assets.nflxext.com/ffe/siteui/vlv3/2e884ce2-da1c-4501-ab9a-10c534d30975/d7125e54-64e4-4e5c-9fa2-d22ad12f2dac/EG-en-20230327-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="errror"
      />
      <div className="bg-black/60 w-full  h-screen fixed top-0 left-0"></div>
      <div className="fixed w-full  px-4  py-24 z-[50]">
        <div className="max-w-[400px]  pt-8 pb-16 px-8 rounded mx-auto bg-black/80 text-white">
          <h1 className="text-center text-3xl text-white  mb-10">Sign IN</h1>
          {errorss ? (
            <p id="errorttt" className=" mt-3 text-red-500">
              {errorss.slice(0,35)} . . . 
            </p>
          ) : (
            ""
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmitFun();
            }}
          >
            <input
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              placeholder="Enter Your Email"
              className="w-full py-3 px-2 my-3 rounded bg-gray-600"
            />
            <input
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="Enter Your Password"
              className="w-full py-3 px-2 my-3 rounded bg-gray-600"
            />
            <button className="w-full py-3 px-2  bg-red-500 rounded f-bold text-2xl mt-8">
              SIGN IN
            </button>
          </form>
          <div className="my-8 text-white flex items-center justify-between">
            <p>
              <input type="checkbox" className="mr-2" /> Remember Me{" "}
            </p>
            <Link
              to="https://www.netflix.com/eg-en/LoginHelp"
              className="mr-2 text-blue-500"
            >
              Need Help?
            </Link>
          </div>
          <p className="text-gray-500 mt-5">
            {" "}
            Already subscriped to NetFlix?{" "}
            <Link to="/createPage">
              <span className="ml-1 text-blue-500 text-1xl">
                Create New Acount
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPge;
