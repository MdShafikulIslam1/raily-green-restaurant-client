import React from "react";

const FoodCard = ({ item }) => {
  const { name, recipe, category, price, image } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Salad" />
      </figure>
      <p className="bg-slate-900 text-white absolute right-0 mt-4 me-4 px-4 py-2 font-medium rounded">$ {price}</p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
