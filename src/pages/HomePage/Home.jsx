import React from 'react';
import Banner from '../../components/Banner/Banner';
import FoodCategory from '../../components/FoodCategory/FoodCategory';
import MenuItems from '../../components/MenuItems/MenuItems';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <FoodCategory></FoodCategory>
           <MenuItems></MenuItems>
        </div>
    );
};

export default Home;