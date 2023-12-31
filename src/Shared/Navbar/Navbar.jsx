import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";
import useGetCart from "../../hooks/useGetCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useGetCart();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire("LogOut Successful");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order</Link>
      </li>
      <li>
        <Link to="/secret">Secret</Link>
      </li>
      <li>
        <Link to="/dashboard/myCart">
          <FaShoppingCart className="w-6 h-6"></FaShoppingCart>
          <div className="badge badge-secondary">+{cart?.length || 0}</div>
        </Link>
      </li>
      {user?.email ? (
        <>
          <button onClick={handleLogOut} className="btn btn-primary btn-ghost">
            LogOut
          </button>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-gray-400 fixed z-10 max-w-screen-xl bg-opacity-40 text-white font-bold">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Raily green</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">
          {user?.email} {user?.displayName}
        </a>
      </div>
    </div>
  );
};

export default Navbar;
