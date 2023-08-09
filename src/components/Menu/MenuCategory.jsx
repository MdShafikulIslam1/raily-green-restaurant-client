import React from "react";
import Cover from "../../Shared/Cover/Cover";
import MenuItemCard from "./../MenuItemCard";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-5 mt-12 justify-around my-16">
        {items.map((item) => (
          <MenuItemCard key={item._id} item={item}></MenuItemCard>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline btn-primary border-0 border-b-4">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
