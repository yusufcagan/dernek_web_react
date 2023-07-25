import React, { useState } from "react";
import { post } from "../api/api";

interface props {
  setAddPopup: React.Dispatch<React.SetStateAction<boolean>>;
}
const AddDuyuruPopup: React.FC<props> = ({ setAddPopup }) => {
  const [konu, setKonu] = useState<string>("");
  const [icerik, setIcerik] = useState<string>("");
  const [gecerlilikTarihi, setGecerlilikTarihi] = useState<string>("");
  const [resimYolu, setResimYolu] = useState<string>("");

  const handleCloseModal = () => {
    setAddPopup(false);
    setKonu("");
    setIcerik("");
    setGecerlilikTarihi("");
    setResimYolu("");
  };

  const addDuyuru = () => {
    post("/duyurular", {
      konu: konu,
      icerik: icerik,
      gecerlilikTarihi: gecerlilikTarihi,
      resimYolu: resimYolu,
    })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    setAddPopup(false);
    setKonu("");
    setIcerik("");
    setGecerlilikTarihi("");
    setResimYolu("");
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-gray-200 p-4 rounded-md w-3/5">
        <h1 className="text-4xl font-bold text-center mb-11">Duyuru Ekle</h1>
        <div className="mb-5 flex flex-col">
          <label>Konu:</label>
          <input
            type="text"
            className="w-full rounded-lg p-2"
            value={konu}
            onChange={(e) => setKonu(e.target.value)}
          />
        </div>
        <div className="mb-5 flex flex-col">
          <label>İçerik:</label>
          <textarea
            className="w-full rounded-lg"
            value={icerik}
            onChange={(e) => setIcerik(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-5 flex flex-col">
          <label>Geçerlilik Tarihi:</label>
          <input
            type="text"
            className="w-full rounded-lg"
            value={gecerlilikTarihi}
            onChange={(e) => setGecerlilikTarihi(e.target.value)}
          />
        </div>
        <div className="mb-5 flex flex-col">
          <label>Resim:</label>
          <button className="rounded-lg bg-white">Resim Seç</button>
        </div>
        <div className="w-full flex flex-row justify-between">
          <button
            onClick={addDuyuru}
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md"
          >
            ekle
          </button>
          <button
            onClick={handleCloseModal}
            className="mt-4 px-4 py-2 bg-red-800 text-white rounded-md"
          >
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddDuyuruPopup;
