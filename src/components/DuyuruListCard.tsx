import React from "react";

interface News {
  konu: string;
  icerik: string;
  gecerlilikTarihi: string;
  resimYolu: string;
}

const DuyuruListCard: React.FC<News> = ({
  konu,
  icerik,
  gecerlilikTarihi,
  resimYolu,
}) => {
  console.log(konu, resimYolu);
  return (
    <div className="bg-white flex flex-row shadow-lg hover:scale-105 transition-transform rounded-lg p-4 mb-4">
      <img
        src="C:\Users\Yusuf\Desktop\project\demo\uploads\indir.jpeg"
        alt="Resim"
      />
      <div>
        <h2 className="text-xl font-bold">{konu}</h2>
        <p className="text-gray-600">{icerik}</p>
        <p className="text-gray-400 mt-2">{gecerlilikTarihi}</p>
      </div>
    </div>
  );
};

export default DuyuruListCard;
