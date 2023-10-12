import { BrowserRouter } from "react-router-dom";
import { CheckoutSideMenu, Navbar } from "../../Components/Common";
import CartProvider from "../../Context/CartContext";
import AppRoutes from "./AppRoutes";
import "./app.css";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
