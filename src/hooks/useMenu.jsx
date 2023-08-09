import { useEffect, useState } from "react";

const useMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => {
        setMenuItems(data);
        setIsLoading(false);
      });
  }, []);
  return [menuItems, isLoading];
};
export default useMenu;
