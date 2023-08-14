import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/HomePage/Home";
import MenuPage from "../pages/MenuPage/MenuPage";
import Order from "../pages/OrderPage/Order";
import Login from "../pages/LoginPage/Login";
import SignUp from "../pages/SignUpPage/SignUp";
import SecretPage from "../pages/SecretPage/SecretPage";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import MyCartPage from "../pages/MyCart/MyCartPage";
import AllUser from "../pages/AllUser/AllUser";
import AddItem from "../pages/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItem from "../pages/ManageItem/ManageItem";

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
        element: (
          <PrivateRoute>
            <SecretPage></SecretPage>
          </PrivateRoute>
        ),
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
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "myCart",
        element: <MyCartPage></MyCartPage>,
      },
      {
        path: "allUser",
        element: <AllUser></AllUser>,
      },
      {
        path: "addItem",
        element: (
          <AdminRoute>
            <AddItem></AddItem>
          </AdminRoute>
        ),
      },
      {
        path: "manage-item",
        element: (
          <AdminRoute>
            <ManageItem></ManageItem>
          </AdminRoute>
        ),
      },
    ],
  },
]);
export default router;
