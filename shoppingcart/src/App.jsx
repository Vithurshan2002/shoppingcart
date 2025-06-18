import { useState } from "react";
import Navbar from "./components/Navbar";
import Shoppingcart from "./components/shoppingcart";
import Sidebar from "./components/Sidebar";
import Products from "./products.json";
import Protect from "./components/Protect";

function App() {
  const price = Products.map((data) => data.price);
  const min = Math.min(...price);
  const max = Math.max(...price);
  const [pricerange, setpricerange] = useState([min, max]);
  const brands = [...new Set(Products.map((data) => data.brand))].sort();
  const [selectbrands, setselectedbrands] = useState([]);
  const [selectRam, setRam] = useState(null);
  const [selectStorage, setStrorage] = useState(null);
  const [search, setSearch] = useState();

  const filterProduct=Products.filter((product)=>{
      const{name,brand,price}=product;
        const matchprotect=name?.toLowerCase().includes(search?.toLowerCase());
        const matchbrand =selectbrands.length == 0 || selectbrands.includes(brand);
        const pricesearch= pricerange.length ==0 || price >=pricerange[0] && price <=pricerange[1]
        return matchprotect && matchbrand && pricesearch;
  })
  return (
    <div>
      <Navbar search={search} setSearch={setSearch} />
      <div className="flex flex-row">
        <div className="w-60">
          <Sidebar
            brand={brands}
            selectStorage={selectStorage}
            setStrorage={setStrorage}
            priceRange={pricerange}
            setpricerange={setpricerange}
            selectbrands={selectbrands}
            setselectedbrands={setselectedbrands}
            selectRam={selectRam}
            setRam={setRam}
          />
        </div>
        <div className="w-full">
          <Protect filterProduct={filterProduct}/>
        </div>
      </div>
    </div>
  );
}

export default App;
