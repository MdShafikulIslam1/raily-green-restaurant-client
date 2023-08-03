import React, { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import MenuItemCard from "../menuItemCard";

const MenuItems = () => {
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const menu = data.filter((item) => item.category === "popular");
        setMenuItems(menu);
      });
  }, []);
  return (
    <section className="my-12">
      <SectionTitle
        subHeading={"check it out"}
        heading={"From our Menu"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-5 mt-12 justify-aro">
        
        {menuItems.map((item) => (
          <MenuItemCard key={item._id} item={item}></MenuItemCard>
        ))}
      </div>
    </section>
  );
};

export default MenuItems;
