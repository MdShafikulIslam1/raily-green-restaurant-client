// import { useContext } from "react";
// import { AuthContext } from "../AuthProvider/AuthProvider";
// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "./useAxiosSecure";

// const useGetCart = () => {
//   const { user } = useContext(AuthContext);
//   const [axiosSecure] = useAxiosSecure();
//   const { data: cart = [], refetch } = useQuery({
//     queryKey: ["carts", user?.email],
//     queryFn: async () => {
//       const res = await axiosSecure(`/carts?email=${user?.email}`);
//       return res.data;
//     },
//   });
//   return [cart, refetch];
// };
// export default useGetCart;
// //

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useGetCart = () => {
  const { user, isLoading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  // Check if user?.email is defined before constructing the query key
  const queryKey = user?.email ? ["carts", user.email] : "/dashboard/myCart";

  const { data: cart = [], refetch } = useQuery({
    queryKey,
    enabled: !isLoading,
    queryFn: async () => {
      if (user?.email) {
        const res = await axiosSecure(`/carts?email=${user.email}`);
        return res.data;
      }
      return []; // Return empty array if user?.email is undefined
    },
  });

  return [cart, refetch];
};

export default useGetCart;
