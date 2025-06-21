import React from "react";
import Product from "../products.json";
const Sidebar = ({
  brand,
  priceRange,
  selectbrands,
  setselectedbrands,
  setpricerange,
  selectRam,
  setRam,
  selectStorage,
  setStrorage,
}) => {
  const ramsize = [...new Set(Product.map((data) => data.ram))].sort();
  const Storage = [...new Set(Product.map((data) => data.storage))].sort();

  const price = Product.map((data) => data.price);
  const min = Math.min(...price);
  const max = Math.max(...price);
  return (
    <div className=" bg-blue-200 shadow border-t-2 border-t-blue-800 h-fit pt-5 ps-4 pe-2 pb-2 rounded-b-sm">
      <h1 className="text-xl font-bold">Filters</h1>
      <p className="py-2 font-bold text-blue-500">Brands</p>
      {brand.map((brand, key) => (
        <label key={key} className="flex px-1 py-2 space-x-1 cursor-pointer">
          <input
            type="checkbox"
            value={selectbrands.includes(brand)}
            onChange={() =>
              setselectedbrands(
                selectbrands.includes(brand)
                  ? selectbrands.filter((data) => data !== brand)
                  : [...selectbrands, brand]
              )
            }
            className="font-bold accent-emerald-800 hover:scale-105"
          />
          <p className="font-bold">{brand}</p>
        </label>
      ))}

      <p className="py-2 font-bold text-blue-500">Price</p>
      <input
        type="range"
        min={min}
        max={max}
        value={priceRange[1]}
        onChange={(e) => {
          setpricerange([min, parseInt(e.target.value)]);
        }}
        className="w-50  accent-blue-900 hover:cursor-pointer"
      />
      <div className="flex justify-between w-50 text-xs pb-2">
        <span className="font-extrabold">
          {priceRange[0]}
          <span className="font-bold"> RS</span>
        </span>
        <span className="font-extrabold text-green-950">
          {priceRange[1]}
          <span className="font-bold"> RS</span>
        </span>
      </div>
      <p className="py-2 font-bold text-blue-500">RAM</p>
      <select
        value={selectRam}
        onChange={(e) => {
          e.target.value ? setRam(e.target.value) : "";
        }}
        className="w-50 bg-blue-50 ps-2 outline-0 ring-1 rounded-full hover:cursor-pointer hover:ring-2 hover:ring-blue-800 transition-all font-semibold"
      >
        <option value="All" className="rounded-full">
          ALL
        </option>
        {ramsize.map((ram, key) => (
          <option key={key} value={ram} className="rounded-full">
            {ram} GB
          </option>
        ))}
      </select>
      <p className="py-2 font-bold text-blue-500">Storage</p>
      <select
        value={selectStorage}
        onChange={(e) => {
          setStrorage(e.target.value ? e.target.value : "");
        }}
        className="w-50  bg-blue-50 ps-2 outline-0 ring-1 rounded-full hover:cursor-pointer hover:ring-2 hover:ring-blue-800 transition-all font-semibold"
      >
        <option value="All" className="rounded-full">
          ALL
        </option>
        {Storage.map((storage, key) => (
          <option key={key} value={storage} className="rounded-full">
            {storage} GB
          </option>
        ))}
      </select>
    </div>
  );
};

export default Sidebar;
