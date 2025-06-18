import React from "react";
import Shoppingcart from "./shoppingcart";


const Protect = ({filterProduct}) => {
  return (
    <>
      <h1 className="pt-20 ps-20 font-bold text-xl">Product({filterProduct.length})</h1>
      {
         filterProduct.length==0? <p className="text-xl font-mono text-red-700 py-2 animate-pulse p-2">No products found matching your Criteria</p>:
      <div className="grid grid-col-1 md:grid-cols-3 gap-10 mx-20 my-10  md:ms-30">
        {filterProduct.map((data, key) => (
          <Shoppingcart data={data} key={key} />
        ))}
      </div>
      }
    </>
  );
};

export default Protect;
