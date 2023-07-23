import React from "react";
import SideMenu from "../../components/SideMenu";
import DuyuruCard from "../../components/DuyuruCard";

const AdminDuyururlar: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <SideMenu />
      <div className="flex flex-col items-center justify-center w-full">
        <div className="mb-16 text-3xl">Duyurular Admin Control</div>
        <div className="w-2/3">
          <p className="bg-green-600 w-12 text-center items-start rounded-md border border-gray-500 cursor-pointer">
            Ekle
          </p>
          <div className="bg-slate-200 mt-2 w-full p-4 rounded-md shadow-md">
            <DuyuruCard />
            <DuyuruCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDuyururlar;
