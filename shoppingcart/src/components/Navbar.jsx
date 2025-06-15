import React from "react";
import { LuSearch } from "react-icons/lu";
const Navbar = () => {
  return (
    <div className="bg-blue-700 text-white flex items-center justify-around py-2 shadow-2xs shadow-black">
      <h1 className="text-xl font-bold">SmartPhone Store</h1>
      <div className="p-1 rounded-full border bg-white">
        <div className="flex items-center justify-center"> 
          <div>
            <LuSearch size={25} className="text-red-800" />
          </div>
          <div>
            <input type="text" placeholder="Search Products" className="outline-0  font-sans bg-white rounded-full text-black ps-1" />
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default Navbar;
