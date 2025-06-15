import { useState } from "react";
import Navbar from "./components/Navbar";
import Shoppingcart from "./components/shoppingcart";
import Sidebar from "./components/Sidebar";
import Products from './products.json';

function App() {

  const price=Products.map((data)=>data.price);
  const min=Math.min(...price);
  const max=Math.max(...price);
  const[pricerange,setpricerange]=useState([min,max]);
  const brands=[...new Set(Products.map((data)=>data.brand))].sort();
  const[selectbrands,setselectedbrands]=useState([]);
   const[selectRam,setRam]=useState(null);
    const[selectStorage,setStrorage]=useState(null);
  return (
    <div>
      <Navbar />
      <div className="flex">
        <div >
          <Sidebar brand={brands} selectStorage={selectStorage} setStrorage={setStrorage} priceRange={pricerange} setpricerange={setpricerange} selectbrands={selectbrands} setselectedbrands={setselectedbrands} selectRam={selectRam} setRam={setRam}/>
        </div>
        <div>
          <Shoppingcart/>
        </div>
      </div>
    </div>
  );
}

export default App;
