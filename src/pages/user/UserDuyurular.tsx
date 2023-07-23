import React, { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { get } from "../../api/api";
import { Link } from "react-router-dom";
import DuyuruListCard from "../../components/DuyuruListCard";

interface dataProps {
  id: number;
  konu: string;
  icerik: string;
  gecerlilikTarihi: string;
  resimYolu: string;
}
const UserDuyurular: React.FC = () => {
  const [data, setData] = useState<dataProps[] | null>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    get("/duyurular")
      .then((response: dataProps[]) => setData(response))
      .catch((error) => console.error(error));
  }, []);

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
        <h1 className="text-3xl font-bold mb-8">Duyurular</h1>
        <div className="flex flex-row">
          <Link to="/UserHaberler" className="mr-12">
            Haberlere Geç
          </Link>
          <div className="text-sm">kullanici</div>
        </div>
      </div>
      <div className=" w-2/3">
        {filteredData?.map((duyuru) => (
          <DuyuruListCard
            key={duyuru.id}
            konu={duyuru.konu}
            icerik={duyuru.icerik}
            gecerlilikTarihi={duyuru.gecerlilikTarihi}
            resimYolu={duyuru.resimYolu}
          />
        ))}
      </div>
    </div>
  );
};

export default UserDuyurular;
