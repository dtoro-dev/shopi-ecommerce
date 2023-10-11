import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../../Context/CartContext";

const Navbar = () => {
  const context = useContext(CartContext);
  const activeStyle = "underline underline-offset-4 decoration-cyan-600";

  const showCheckout = () => {
    context.showCheckoutSideMenu();
    context.hideProductDetail();
  };

  return (
    <nav className="flex justify-between items-center fixed z-20 w-full py-5 px-8 text-sm font-dark bg-blue-200 top-0">
      <ul className="flex items-center gap-3">
        <li className="font-bold text-lg">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furnitures"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toys"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/others"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60"> dtoro.a.s@gmail.com</li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sign In
          </NavLink>
        </li>
        <li
          onClick={() => showCheckout()}
          className="w-15 flex justify-center items-center rounded-full px-2 py-1 cursor-pointer select-none hover:bg-white/70 transition ease-in-out hover:scale-11 duration-300"
        >
          <ShoppingCartIcon className="h-5 w-5" />
          {context.cartProduct.length}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
