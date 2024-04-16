import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { menuOff } from "../store/AppSlice";
import { useSearchParams } from "react-router-dom";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [params, setParams] = useSearchParams();
  console.log(params.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(menuOff());
  });
  return (
    <div className="flex  p-6">
      {" "}
      <div className=" ">
        <iframe
          width="800"
          height="500"
          src={"https://www.youtube.com/embed/" + params.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-2 ml-4 h-[500px]  border border-black bg-gray-50 ">
        <LiveChat />
      </div>
    </div>
  );
};

export default WatchPage;
