import React, { useEffect } from "react";
import { useState } from "react";

import { getDoc, doc, collection, onSnapshot,deleteDoc, updateDoc } from "firebase/firestore";
import { UserAuth } from "../../contextApi/AuthContext";

import { db } from "../../firebase-config/firebase";

const FavouriteMove = ({ image, title, release, descript }) => {
  let [userSelected, setUserSelected] = useState([]);
  let { user } = UserAuth();

  useEffect(() => {
    onSnapshot(doc(db, "UserSingUp", `${user?.email}`), (doc) => {
      setUserSelected(doc.data()?.userCollectio);
    });
  }, [user?.email]);

  console.log("userSelected",userSelected);



  let deleteFunction=async (id)=>{
    let filtter=userSelected.filter((item)=> item.id !== id )
    await updateDoc(doc(db, "UserSingUp", `${user?.email}`),{
      userCollectio:filtter
    })
  }
  return (
    
    <div className="contaLand w-full  text-white">
      <div className="imagee w-full h-[350px] ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2e884ce2-da1c-4501-ab9a-10c534d30975/d7125e54-64e4-4e5c-9fa2-d22ad12f2dac/EG-en-20230327-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          className="w-full h-full object-cover"
          alt="dfggdfgdf"
        />
      </div>
      <h1 className="text-center text-white text-3xl py-8 ">
            Your Selected Move ..{" "}
          </h1>
      {userSelected?.map((item) => (
        <div key={item.title} className="block md:flex items-center  w-full pt-8 px-7  ">
          <img
            src={`https://image.tmdb.org/t/p/original/${item.pic}`}
            alt="error"
            className="w-full md:w-[300px] h-full"
          />
      
          <div className="text ml-5">
            <h1 className="text-2xl text-white ">{item.title} </h1>
            <p className="text-blue-500">{item.date}</p>
            <p className="text-1xl text-gray-500 my-4">
              Title is very good way to use it in the world please youse it{" "}
              {item.overView}
            </p>
            <button className="py-2 px-3 bg-red-700 text-white rounded" onClick={()=>{
              deleteFunction(item.id)
            }}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FavouriteMove;
