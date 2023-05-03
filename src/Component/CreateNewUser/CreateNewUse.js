import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../contextApi/AuthContext";

const CreateNewUse = () => {
  let { createNewUserFun, user } = UserAuth();

  let navigate = useNavigate();
  let [newEmail, setNewemail] = useState("");
  let [newPassword, setNewpassword] = useState("");

  let onSubmitFun = async () => {
    try {
      await createNewUserFun(newEmail, newPassword);
      navigate("/");
      setNewemail("");
      setNewpassword("");
    } catch (error) {
      console.error(error);
    
    }
  };

  return (
    <div className=" h-full w-full ">
      <img
        className="absolute w-full h-full object-cover "
        src="https://assets.nflxext.com/ffe/siteui/vlv3/2e884ce2-da1c-4501-ab9a-10c534d30975/d7125e54-64e4-4e5c-9fa2-d22ad12f2dac/EG-en-20230327-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="errror"
      />
      <div className="bg-black/60 w-full  h-screen fixed top-0 left-0"></div>
      <div className="fixed w-full h-full px-4  py-24 z-[50]">
        <div className="max-w-[400px] h-[600px] pt-8 pb-16 px-8 rounded mx-auto bg-black/80 text-white">
          <h1 className="text-center text-3xl text-white  mb-10">
            Create New Acount
          </h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmitFun();
            
            }}
          >
            <input
              required
              type="email"
              placeholder="Enter Your Email"
              className="w-full py-3 px-2 my-3 rounded bg-gray-600"
              value={newEmail}
              onChange={(e) => {
                setNewemail(e.target.value);
              }}
            />
            <input
              required
              type="password"
              placeholder="Enter Your Password"
              className="w-full py-3 px-2 my-3 rounded bg-gray-600"
              value={newPassword}
              onChange={(e) => {
                setNewpassword(e.target.value);
              }}
            />
            <button className="w-full py-3 px-2  bg-red-500 rounded f-bold text-2xl mt-8">
              Submit
            </button>
          </form>
          <div className="my-8 text-white flex items-center justify-between">
            <div>
              <input type="checkbox" className="mr-2" /> Remember Me{" "}
            </div>
            <Link
              to="https://www.netflix.com/eg-en/LoginHelp"
              className="mr-2 text-blue-500"
            >
              Need Help?
            </Link>
          </div>
          <div className="text-gray-500">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more . . .
            <div className="text-gray-500 mt-5">
              {" "}
              Already subscriped to NetFlix?{" "}
              <Link to="/loginPage">
                <span className="ml-1 text-blue-500 text-1xl">SigIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewUse;
