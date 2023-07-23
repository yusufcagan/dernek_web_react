import React, { useEffect, useState } from "react";
import SideMenu from "../../components/SideMenu";
import HaberlerCard from "../../components/HaberlerCard";
import { get } from "../../api/api";
import AddPopup from "../../components/AddHaberPopup";
import UpdatePopup from "../../components/UpdateHaberPopup";

interface haberProps {
  id: number;
  konu: string;
  icerik: string;
  gecerlilikTarihi: string;
  haberLinki: string;
}

const AdminHaberler: React.FC = () => {
  const [addPopup, setAddPopup] = useState<boolean>(false);
  const [updatePopup, setUpdatePopup] = useState<boolean>(false);
  const [selecetHaber, setSelectHaber] = useState<number>();
  const [data, setData] = useState<haberProps[] | null>([]);

  const addClick = () => {
    setAddPopup(true);
  };

  useEffect(() => {
    get("/haberler")
      .then((response: haberProps[]) => setData(response))
      .catch((error) => console.log(error));
  }, [data]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <SideMenu />
      <div className="flex flex-col items-center justify-center w-full">
        <div className="mb-16 text-3xl">Haberler Admin Control</div>
        <div className="w-2/3">
          <p
            onClick={addClick}
            className="bg-green-600 w-12 text-center items-start rounded-md border border-gray-500 cursor-pointer"
          >
            Ekle
          </p>
          <div className="bg-slate-200 mt-2 w-full p-4 rounded-md shadow-md">
            {data?.map((haber, index) => (
              <HaberlerCard
                key={index}
                konu={haber.konu}
                id={haber.id}
                setUpdatePopup={setUpdatePopup}
                setSelectHaber={setSelectHaber}
              />
            ))}
          </div>
        </div>
        {addPopup && <AddPopup setAddPopup={setAddPopup} />}
        {updatePopup && (
          <UpdatePopup
            setUpdatePopup={setUpdatePopup}
            selectHaber={selecetHaber}
          />
        )}
      </div>
    </div>
  );
};

export default AdminHaberler;
