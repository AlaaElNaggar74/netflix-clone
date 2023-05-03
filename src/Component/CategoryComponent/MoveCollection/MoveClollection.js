import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import { Link } from "react-router-dom";

import { updateDoc, doc, arrayUnion } from "firebase/firestore";
import { UserAuth } from "../../../contextApi/AuthContext";

import { db } from "../../../firebase-config/firebase";
import Swal from "sweetalert2";

const MoveClollection = ({ item }) => {
  let [isLike, setIsLike] = useState(false);
  let [isSave, setIsSave] = useState(false);

  let { user } = UserAuth();

  let saveMoveFun = async () => {
    try {
      if (user?.email) {
        setIsLike(!isLike);
        await updateDoc(doc(db, "UserSingUp", user?.email), {
          userCollectio:
            arrayUnion(
              {
                id: Math.round(Math.random() * 1000000),
                title: item.title,
                overView: item.overview,
                date: item.release_date,
                pic: item.backdrop_path,
              }
            ),
        });
      } else {
        Swal.fire(
          "You Should Sing Up First?",
          "That thing is still around?",
          "question"
        );
      }
    } catch (error) {
      console.log();
    }
  };

  return (
    <div className="slideItem w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-3">
      {/* <Link  to={`/`}> */}
      <img
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        className="w-full h-auto block"
        alt={item?.title}
      />
      <div className="absolute top-0 left-0 h-full w-full opacity-0 hover:bg-black/80 hover:opacity-100 text-white flex items-center justify-center ease-in-out duration-300">
        {" "}
        <p className=""> {item?.title.slice(0, 20) + " . . . "}</p>
        <p
          className="absolute top-4 left-4 text-gray-300 font-bold "
          onClick={saveMoveFun}
        >
          {isLike ? <FaHeart /> : <FaRegHeart />}
        </p>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default MoveClollection;
