import React from "react";
import { FaHome, FaShoppingCart, FaWallet } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
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
          <li>
            <NavLink to="/dashboard/home">
              <FaHome /> User home
            </NavLink>
            <NavLink to="/dashboard/myCart">
              <FaShoppingCart /> My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to='dashboard/paymentHistory'>
              <FaWallet /> Payment history
            </NavLink>
          </li>
          <div className="divider"></div>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
