import React from "react";
import Shoppingcart from "./shoppingcart";
import Product from '../products.json'

const Protect = () => {
  return (
    <div className="grid grid-col-1 md:grid-cols-3 gap-10 m-20 md:ms-30">
      {
          Product.map((data,key)=> <Shoppingcart data={data} key={key}/> )

      }
    </div>
  );
};

export default Protect;
