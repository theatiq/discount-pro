import React, { useContext, useEffect, useState } from "react";
import Banner from "../components/Banner";
import { Link, useLoaderData } from "react-router-dom";
import TopBrands from "../components/TopBrands";
import Marquee from "react-fast-marquee";
import BrandsOnSale from "../components/BrandsOnSale";
import { IdContext } from "../providers/IdProvider";

const Home = () => {
  const [id, setId] = useContext(IdContext);
  const handleId = (brandId) => {
    setId(brandId);
  };

  const allData = useLoaderData();
  const [allBrands, setAllBrands] = useState([]);

  useEffect(() => {
    setAllBrands(allData.slice(0, 6));
  }, [allData]);

  return (
    <div className="w-11/12 mx-auto">
      <Banner></Banner>
      <h1 className="text-center text-blue-950 font-bold text-4xl my-5">
        Top Brands
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {allBrands.map((brand) => (
          <TopBrands brand={brand}></TopBrands>
        ))}
      </div>
      <Marquee pauseOnHover={true} speed={100} className="space-x-10 my-10">
        {allData.map((brand) => (
          <Link to={"/brands"} onClick={() => handleId(brand.id)}>
            <img
              className="w-40 h-40 ml-10 rounded-full"
              src={brand.brand_logo}
              alt="brand_logo"
            />
          </Link>
        ))}
      </Marquee>
      <h1 className="text-center text-blue-950 font-bold text-4xl my-5">
        Brands on Sale
      </h1>
      <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {allData
          .filter((brand) => brand.isSaleOn === true)
          .map((brand) => (
            <BrandsOnSale brand={brand}></BrandsOnSale>
          ))}
      </div>
    </div>
  );
};

export default Home;
