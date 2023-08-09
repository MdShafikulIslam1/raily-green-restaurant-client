import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../assets/menu/pizza-bg.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "../../components/Menu/MenuCategory";

const MenuPage = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Raily Green | menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our Menu"></Cover>
      <div className="my-8">
        <SectionTitle
          subHeading={"Don't Miss"}
          heading={"Today's Offer"}
        ></SectionTitle>
        <MenuCategory items={offered}></MenuCategory>
      </div>
      <MenuCategory
        items={dessert}
        img={dessertImg}
        title={"dessert"}
      ></MenuCategory>
      <MenuCategory items={pizza} img={pizzaImg} title={"pizza"}></MenuCategory>
      <MenuCategory items={soup} img={soupImg} title={"soup"}></MenuCategory>
      <MenuCategory items={salad} img={saladImg} title={"salad"}></MenuCategory>
    </div>
  );
};

export default MenuPage;
