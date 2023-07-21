import React from "react";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <div className="side-menu w-48 h-screen bg-gray-800 text-white p-4">
      <ul className="space-y-2">
        <li>
          <Link to="/AdminHaberler" className="block p-2 rounded hover:bg-gray-700">
            Haberler
          </Link>
        </li>
        <li>
          <Link to="/AdminDuyurular" className="block p-2 rounded hover:bg-gray-700">
            Duyurular
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
