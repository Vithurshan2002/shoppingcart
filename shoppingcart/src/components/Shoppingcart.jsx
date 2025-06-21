import React from "react";
import { motion } from "framer-motion";
const Shoppingcart = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: false }}
      className=" p-1 rounded outline-2 hover:ring-2 hover:ring-green-600 cursor-pointer w-60 inset-shadow-sm inset-shadow-blue-950 hover:scale-105 transition-all hover:bg-gray-200"
    >
      <div className="h-44 w-44  mx-auto">
        <img
          src={data.imageUrl}
          alt={data.name}
          className="w-full  h-full object-cover object-center"
        />
      </div>
      <p className="font-bold text-xl text-red-600 pt-3">{data.name}</p>
      <div className="text-gray-500 text-sm py-1 line-clamp-5">
        {data.features.map((data, key) => (
          <p key={key}>{data}</p>
        ))}
      </div>
      <div className="flex justify-between py-2">
        <div>
          <p className="text-green-600 font-extrabold animate-pulse">
            ${data.price}
          </p>
          <p className="text-xs font-bold text-gray-500">
            <del>${Number(data.price) + 1}</del>
          </p>
        </div>
        <button className="bg-blue-600  text-white p-1 rounded-full font-bold cursor-pointer text-sm hover:bg-blue-400 outline-1 hover:text-black ">
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default Shoppingcart;
