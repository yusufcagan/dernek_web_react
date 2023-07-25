import React, { useState, useEffect } from "react";
import SideMenu from "../../components/SideMenu";
import DuyuruCard from "../../components/DuyuruCard";
import AddDuyuruPopup from "../../components/AddDuyuruPopup";
import UpdateDuyuruPopup from "../../components/UpdateDuyuruPopup";
import { get } from "../../api/api";

interface duyurularProps {
  konu: string;
  icerik: string;
  gecerlilikTarihi: string;
  resim: string;
  id: number;
}

const AdminDuyururlar: React.FC = () => {
  const [addPopup, setAddPopup] = useState<boolean>(false);
  const [updatePopup, setUpdatePopup] = useState<boolean>(false);
  const [data, setData] = useState<duyurularProps[] | null>([]);
  const [selectDuyuru, setSelectDuyuru] = useState<number>();

  useEffect(() => {
    get("/duyurular")
      .then((response: duyurularProps[]) => setData(response))
      .catch((error) => console.log(error));
  }, [data]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <SideMenu />
      <div className="flex flex-col items-center justify-center w-full">
        <div className="mb-16 text-3xl">Duyurular Admin Control</div>
        <div className="w-2/3">
          <p
            onClick={() => setAddPopup(true)}
            className="bg-green-600 w-12 text-center items-start rounded-md border border-gray-500 cursor-pointer"
          >
            Ekle
          </p>
          <div className="bg-slate-200 mt-2 w-full p-4 rounded-md shadow-md">
            {data?.map((duyuru, index) => (
              <DuyuruCard
                key={index}
                konu={duyuru.konu}
                id={duyuru.id}
                setUpdatePopup={setUpdatePopup}
                setSelectDuyuru={setSelectDuyuru}
              />
            ))}
          </div>
        </div>
        {addPopup && <AddDuyuruPopup setAddPopup={setAddPopup} />}
        {updatePopup && (
          <UpdateDuyuruPopup
            setUpdatePopup={setUpdatePopup}
            selectDuyuru={selectDuyuru}
          />
        )}
      </div>
    </div>
  );
};

export default AdminDuyururlar;
