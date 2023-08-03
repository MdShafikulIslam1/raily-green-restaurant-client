const MenuItemCard = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="flex gap-4 justify-center items-center">
      <img
      style={{borderRadius:"0 200px 200px 200px"}}
        className="w-[116px] "
        src={image}
        alt=""
      />
      <div>
        <p className="uppercase mb-1">{name}</p>
        <p>{recipe}</p>
      </div>
      <p className="text-orange-500">$ {price}</p>
    </div>
  );
};

export default MenuItemCard;
