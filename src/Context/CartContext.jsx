import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { getProducts } from "../Api/products";

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

  // Items
  const [items, setItems] = useState([]);

  // Search
  const [searchByTitle, setSearchByTitle] = useState("");

  // Item filtered
  const [filteredItems, setFilteredItems] = useState([]);

  // Checkout Side Menu - Open/Close
  const [isCheckoutSideMenuOpen, setCheckoutSideMenuOpen] = useState(false);
  const showCheckoutSideMenu = () => setCheckoutSideMenuOpen(true);
  const hideCheckoutSideMenu = () => setCheckoutSideMenuOpen(false);

  const init = async () => {
    const products = await getProducts();
    setItems(products ?? []);
  };

  useEffect(() => {
    init();
  }, []);

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  useEffect(() => {
    if (searchByTitle) {
      setFilteredItems(filteredItemsByTitle(items, searchByTitle));
    }
  }, [items, searchByTitle]);

  console.log("filteredItems", filteredItems);

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
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
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
