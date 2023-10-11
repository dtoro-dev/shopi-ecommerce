import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // Shopi Cart - Increment quantity
  const [count, setCount] = useState(0);

  // Shopi Product Detail - Open/Close
  const [isProductDetailOpen, setProductDetailOpen] = useState(false);
  const showProductDetail = () => setProductDetailOpen(true);
  const hideProductDetail = () => setProductDetailOpen(false);

  // Product Detail - Show Product
  const [productToShow, setProductToShow] = useState({});

  // Cart Product
  const [cartProduct, setCartProduct] = useState([]);

  // Orders
  const [order, setOrder] = useState([]);

  // Checkout Side Menu - Open/Close
  const [isCheckoutSideMenuOpen, setCheckoutSideMenuOpen] = useState(false);
  const showCheckoutSideMenu = () => setCheckoutSideMenuOpen(true);
  const hideCheckoutSideMenu = () => setCheckoutSideMenuOpen(false);

  return (
    <CartContext.Provider
      value={{
        count,
        setCount,
        showProductDetail,
        hideProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProduct,
        setCartProduct,
        isCheckoutSideMenuOpen,
        showCheckoutSideMenu,
        hideCheckoutSideMenu,
        order,
        setOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
