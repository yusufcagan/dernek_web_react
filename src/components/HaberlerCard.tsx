import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { GrUpdate } from "react-icons/gr";
import { remove } from "../api/api";

interface haberProps {
  konu: string;
  id: number;
  setUpdatePopup: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectHaber: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const HaberlerCard: React.FC<haberProps> = ({
  id,
  konu,
  setUpdatePopup,
  setSelectHaber,
}) => {
  const onClick = (id: number) => {
    setUpdatePopup(true);
    setSelectHaber(id);
  };

  const deleteHaber = () => {
    remove("/haberler", id);
  };
  return (
    <div className="w-full bg-slate-200 flex flex-row rounded-md shadow-md justify-between items-center mb-3 p-3">
      <div>
        <p className="ml-5">{konu}</p>
      </div>
      <div className="flex flex-row">
        <GrUpdate onClick={() => onClick(id)} className="mr-5 cursor-pointer" />
        <BsFillTrashFill
          onClick={deleteHaber}
          className="mr-3 cursor-pointer"
          color="#C70000"
        />
      </div>
    </div>
  );
};

export default HaberlerCard;
