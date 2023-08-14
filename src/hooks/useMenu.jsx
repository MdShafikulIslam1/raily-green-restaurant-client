import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
  const {
    data: menuItems = [],
    isLoading,
    refetch,
  } = useQuery(["menu"], async () => {
    const res = await fetch("http://localhost:5000/menu");
    return res.json();
  });
  return [menuItems, isLoading, refetch];
};
export default useMenu;
