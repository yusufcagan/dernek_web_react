import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { GrUpdate } from "react-icons/gr";

const HaberlerCard: React.FC = () => {
  return (
    <div className="w-full bg-slate-200 flex flex-row rounded-md shadow-md justify-between items-center mb-3 p-3">
      <div>
        <p className="ml-5">title</p>
      </div>
      <div className="flex flex-row">
        <GrUpdate className="mr-5 cursor-pointer" />
        <BsFillTrashFill className="mr-3 cursor-pointer" color="#C70000" />
      </div>
    </div>
  );
};

export default HaberlerCard;
