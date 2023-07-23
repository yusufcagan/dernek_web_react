import React, { useState, useEffect } from "react";
import HaberlerListCard from "../../components/HaberlerListCard";
import { BiSearch } from "react-icons/bi";
import { get } from "../../api/api";
import { Link } from "react-router-dom";

interface dataProps {
  id: number;
  konu: string;
  icerik: string;
  gecerlilikTarihi: string;
  haberLinki: string;
}
const UserHaberler: React.FC = () => {
  const [data, setData] = useState<dataProps[] | null>([]);
  const [selectedHaber, setSelectedHaber] = useState<dataProps | null>(null);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    get("/haberler")
      .then((response: dataProps[]) => setData(response))
      .catch((error) => console.error(error));
  }, []);

  // Habere tıklandığında seçilen haberi ayarlamak
  const handleHaberClick = (haber: dataProps) => {
    setSelectedHaber(haber);
  };

  // Modalı kapatmak için fonksiyon
  const handleCloseModal = () => {
    setSelectedHaber(null);
  };

  const filteredData = data?.filter((haber) =>
    haber.konu.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-8">
      <div className="flex flex-row justify-around w-full">
        <div className="flex flex-row items-center justify-center border border-gray-500 rounded-md h-8 bg-white">
          <BiSearch />
          <input
            className="h-7 w-24 rounded-md bg-white "
            placeholder="Ara"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <h1 className="text-3xl font-bold mb-8">Haberler</h1>
        <div className="flex flex-row">
          <Link to="/UserDuyurular" className="mr-12">
            Duyurulara Geç
          </Link>
          <div className="text-sm">kullanici</div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredData?.map((haber) => (
          <HaberlerListCard
            key={haber.id}
            konu={haber.konu}
            icerik={
              haber.icerik.length <= 78
                ? haber.icerik
                : `${haber.icerik.slice(0, 60)}  . . .  `
            }
            gecerlilikTarihi={haber.gecerlilikTarihi}
            haberLinki={haber.haberLinki}
            onClick={() => handleHaberClick(haber)}
          />
        ))}
      </div>
      {/* PopUp */}
      {selectedHaber && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-4 rounded-md w-3/5">
            <h1 className="text-4xl font-bold text-center mb-11">
              {selectedHaber.konu}
            </h1>
            <p className="text-gray-800 text-lg">{selectedHaber.icerik}</p>
            <div className="flex flex-row justify-between mt-11">
              <p className="text-gray-500 text-md">
                {selectedHaber.gecerlilikTarihi}
              </p>
              <div className="flex flex-row">
                <p className="mr-3 text-gray-800"> Haber Detayları: </p>
                <a
                  href={`//${selectedHaber.haberLinki}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 text-md cursor-pointer mr-32 hover:underline"
                >
                  {selectedHaber.haberLinki}
                </a>
              </div>
            </div>

            <button
              onClick={handleCloseModal}
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md"
            >
              Kapat
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserHaberler;
