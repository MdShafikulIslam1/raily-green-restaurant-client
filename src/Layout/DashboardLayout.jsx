import React from "react";
import {
  FaHome,
  FaShoppingCart,
  FaUser,
  FaUsers,
  FaWallet,
} from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const DashboardLayout = () => {
  const [isAdmin] = useAdmin();
  console.log("from dasbboard ", isAdmin);
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-custom-color text-base-content uppercase">
          {/* Sidebar content here */}
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myCart">
                  <FaShoppingCart /> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="dashboard/paymentHistory">
                  <FaWallet /> Payment history
                </NavLink>
              </li>
              <li>
                <NavLink to="allUser">
                  <FaUsers /> All User
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome /> User home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myCart">
                  <FaShoppingCart /> My Cart
                </NavLink>
              </li>
              <li>
                <NavLink to="dashboard/paymentHistory">
                  <FaWallet /> Payment history
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          {/* fixed content for general user and admin user */}
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
