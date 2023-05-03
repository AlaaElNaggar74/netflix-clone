import React, { useEffect, useState } from "react";

import axios from "axios";
import MoveClollection from "./MoveCollection/MoveClollection";

import { FaArrowAltCircleLeft,FaArrowAltCircleRight } from "react-icons/fa";

import "./CategoryCopon.css"
const CategoryCopon = ({ cateTitle, fetchUrl }) => {
  let [moveList, setMoveList] = useState([]);

  useEffect(() => {
    axios.get(fetchUrl).then((res) => setMoveList(res.data.results));
  }, [fetchUrl]);

  let moveLeft=()=>{
    let moveEl=document.getElementById(`slider` +cateTitle)
    moveEl.scrollLeft=moveEl.scrollLeft-500;
  }
  let moveRight=()=>{
    let moveEl=document.getElementById(`slider` +cateTitle)
    moveEl.scrollLeft=moveEl.scrollLeft+500;
  }


  return (
    <div className="CategoryCopon my-5">
      <h1 className="text-white text-3xl p-4 ">{cateTitle}</h1>
      <div className="relative flex items-center group ">
        <FaArrowAltCircleLeft size={55} className="absolute left-0 z-[110] text-white opacity-50 hover:opacity-100  ease-in-out duration-300 invisible	 group-hover:visible cursor-pointer" onClick={moveLeft}/> 
        <div id={`slider` +cateTitle} className="hidddddd w-full h-full  overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative pr-3">
          {moveList &&
            moveList.map(
              (item) =>
                item?.backdrop_path && (
                  <MoveClollection key={item.id} item={item} />
                )
            )}
        </div>
        <FaArrowAltCircleRight size={55} className="absolute right-0 z-[110] text-white opacity-50 hover:opacity-100  ease-in-out duration-300 invisible	 group-hover:visible cursor-pointer" onClick={moveRight}/>
      </div>
    </div>
  );
};

export default CategoryCopon;
