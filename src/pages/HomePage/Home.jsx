import React from "react";
import Banner from "../../components/Banner/Banner";
import FoodCategory from "../../components/FoodCategory/FoodCategory";
import MenuItems from "../../components/MenuItems/MenuItems";
import Featured from "../../components/Featured/Fetured";
import Testimonials from "../../components/Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Raily Green | Home</title>
      </Helmet>
      <Banner></Banner>
      <FoodCategory></FoodCategory>
      <MenuItems></MenuItems>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
