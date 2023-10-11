import { BrowserRouter } from "react-router-dom";
import { Navbar } from "../../Components/Common";
import CartProvider from "../../Context/CartContext";
import AppRoutes from "./AppRoutes";
import "./app.css";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
