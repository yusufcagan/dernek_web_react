import React, { useState } from "react";
import { post } from "../api/api";

interface props {
  setAddPopup: React.Dispatch<React.SetStateAction<boolean>>;
}
const AddPopup: React.FC<props> = ({ setAddPopup }) => {
  const [konu, setKonu] = useState<string>("");
  const [icerik, setIcerik] = useState<string>("");
  const [gecerlilikTarihi, setGecerlilikTarihi] = useState<string>("");
  const [haberLinki, setHaberLinki] = useState<string>("");

  const handleCloseModal = () => {
    setAddPopup(false);
    setKonu("");
    setIcerik("");
    setGecerlilikTarihi("");
    setHaberLinki("");
  };
  const addHaber = () => {
    console.log("konu:", konu);

    post("/haberler", {
      konu: konu,
      icerik: icerik,
      gecerlilikTarihi: gecerlilikTarihi,
      haberLinki: haberLinki,
    })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    setAddPopup(false);
    setKonu("");
    setIcerik("");
    setGecerlilikTarihi("");
    setHaberLinki("");
  };
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-gray-200 p-4 rounded-md w-3/5">
        <h1 className="text-4xl font-bold text-center mb-11">Haber Ekle</h1>
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
          <label>Haber Linki:</label>
          <input
            type="text"
            className="w-full rounded-lg"
            value={haberLinki}
            onChange={(e) => setHaberLinki(e.target.value)}
          />
        </div>
        <div className="w-full flex flex-row justify-between">
          <button
            onClick={addHaber}
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

export default AddPopup;
