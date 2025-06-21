import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Products from "./products.json";
import Protect from "./components/Protect";

function App() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const price = Products.map((data) => data.price);
  const min = Math.min(...price);
  const max = Math.max(...price);
  const [pricerange, setpricerange] = useState([min, max]);
  const brands = [...new Set(Products.map((data) => data.brand))].sort();
  const [selectbrands, setselectedbrands] = useState([]);
  const [selectRam, setRam] = useState("");
  const [selectStorage, setStrorage] = useState("");
  const [search, setSearch] = useState();


useEffect(() => {
  const filterProduct = Products.filter((product) => {
    const { name, brand, price, ram, storage } = product;
    const matchName = !search || name.toLowerCase().includes(search.toLowerCase());
    const matchBrand = selectbrands.length === 0 || selectbrands.includes(brand);
    const matchPrice = price >= pricerange[0] && price <= pricerange[1];
    const matchRam = selectRam === "" || ram == selectRam || selectRam==="All";
    const matchStorage = selectStorage === "" || storage == selectStorage || selectStorage==="All";

    return matchName && matchBrand && matchPrice && matchRam && matchStorage;
  });

  setFilteredProducts(filterProduct);
}, [search, selectbrands, pricerange, selectRam, selectStorage]);



 


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
          <Protect filterProduct={filteredProducts}/>
        </div>
      </div>
    </div>
  );
}

export default App;

