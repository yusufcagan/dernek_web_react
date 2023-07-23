import React from "react";

interface props {
  konu: string;
  icerik: string;
  gecerlilikTarihi: string;
  haberLinki: string;
  onClick: () => void;
}

const HaberlerListCard: React.FC<props> = ({
  konu,
  icerik,
  gecerlilikTarihi,
  haberLinki,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="bg-white shadow-lg hover:scale-105 transition-transform cursor-pointer rounded-lg p-4 m-4"
    >
      <h2 className="text-xl font-bold">{konu}</h2>
      <p className="text-gray-600">{icerik}</p>
      <p className="text-gray-400 mt-2">{gecerlilikTarihi}</p>
    </div>
  );
};

export default HaberlerListCard;
