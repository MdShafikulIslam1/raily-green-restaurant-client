import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/HomePage/Home";
import MenuPage from "../pages/MenuPage/MenuPage";
import Order from "../pages/OrderPage/Order";
import Login from "../pages/LoginPage/Login";
import SignUp from "../pages/SignUpPage/SignUp";
import SecretPage from "../pages/SecretPage/SecretPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <MenuPage></MenuPage>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/secret",
        element: <PrivateRoute><SecretPage></SecretPage></PrivateRoute>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
export default router;
