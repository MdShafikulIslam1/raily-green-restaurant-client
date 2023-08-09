import SectionTitle from "../SectionTitle/SectionTitle";
import MenuItemCard from "../menuItemCard";
import useMenu from "../../hooks/useMenu";

const MenuItems = () => {
  const [menuItems] = useMenu();
  const popularItems = menuItems.filter((item) => item.category === "popular");
  return (
    <section className="my-12">
      <SectionTitle
        subHeading={"check it out"}
        heading={"From our Menu"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-5 mt-12 justify-aro">
        {popularItems.map((item) => (
          <MenuItemCard key={item._id} item={item}></MenuItemCard>
        ))}
      </div>
    </section>
  );
};

export default MenuItems;
