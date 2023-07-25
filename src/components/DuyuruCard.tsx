import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { GrUpdate } from "react-icons/gr";
import { remove } from "../api/api";

interface props {
  konu: string;
  id: number;
  setSelectDuyuru: React.Dispatch<React.SetStateAction<number | undefined>>;
  setUpdatePopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const DuyuruCard: React.FC<props> = ({
  konu,
  id,
  setSelectDuyuru,
  setUpdatePopup,
}) => {
  const onClick = (id: number) => {
    setSelectDuyuru(id);
    setUpdatePopup(true);
  };

  const deleteDuyuru = () => {
    remove(`/duyurular`, id);
  };
  return (
    <div className="w-full bg-slate-200 flex flex-row rounded-md shadow-md justify-between items-center mb-3 p-3">
      <div>
        <p className="ml-5">{konu}</p>
      </div>
      <div className="flex flex-row">
        <GrUpdate onClick={() => onClick(id)} className="mr-5 cursor-pointer" />
        <BsFillTrashFill
          onClick={deleteDuyuru}
          className="mr-3 cursor-pointer"
          color="#C70000"
        />
      </div>
    </div>
  );
};

export default DuyuruCard;
