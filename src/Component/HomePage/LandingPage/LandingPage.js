import { Axios } from "axios";
import React, { useEffect, useState } from "react";

import axios from "axios";

import request from "../../../ApiData/ApiLinks";

const LandingPage = () => {
  let [moveList, setMoveList] = useState([]);

  let randMove = moveList[Math.round(Math.random() * moveList.length - 1)];

  useEffect(() => {
    axios
      .get(request.requestUpcoming)
      .then((res) => setMoveList(res.data.results));
  }, []);

  return (
    <div className="contaLand w-full h-[550px] text-white">
      <div className="imagee h-full w-full ">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black "></div>
        <img
          src={`https://image.tmdb.org/t/p/original/${randMove?.backdrop_path}`}
          className="w-full h-full object-cover"
          alt={randMove?.title}
        />
      </div>
      <div className="textContent bg-gray absolute w-full top-[20%] p-5 md:p-8">
        <h3 className="text-3xl md:text-5xl  text-white">{randMove?.title}</h3>
        <div className="landingButton my-5 ">
          <button className="bg-white text-black text-3xl mr-3 rounded border py-2 px-5">
            Play
          </button>
          <button className="text-white bg-transparent text-3xl mr-3 rounded border py-2 px-5">
            Watch Later
          </button>
        </div>
        <h3 className="text-gray-500">Relaese In: {randMove?.release_date}</h3>
        <h3 className="w-full md:max-w-[75%] lg:max-w-[50%] xl:max-w-[35%]">
          Relaese in{" "}
          {(randMove?.overview)?.length >= 150
            ? (randMove?.overview).slice(0, 150) +" . . . ."
            : randMove?.overview}
        </h3>
      </div>
    </div>
  );
};

export default LandingPage;
