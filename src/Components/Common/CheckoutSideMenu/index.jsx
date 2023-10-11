import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext, useEffect, useRef } from "react";
import { CartContext } from "../../../Context/CartContext";
import { priceFormat, totalPrice, totalTax } from "../../../utils";
import OrderCard from "../OrderCart";
import "./styles.css";

const CheckoutSideMenu = () => {
  const context = useContext(CartContext);
  const containerCartRef = useRef();

  useEffect(() => {
    containerCartRef.current.scrollTop = containerCartRef.current.scrollHeight;
  }, [context.cartProduct]);

  const hideCheckout = () => {
    context.hideCheckoutSideMenu();
  };

  const onDeleteProduct = (id) => {
    const newCartProduct = context.cartProduct.filter((item) => item.id !== id);

    context.setCartProduct(newCartProduct);
  };

  return (
    <aside
      className={`checkout-side-menu flex flex-col fixed right-0 bg-blue-200 ${
        context.isCheckoutSideMenuOpen
          ? "checkout-side-menu-exit checkout-side-menu-enter-active"
          : "checkout-side-menu-enter checkout-side-menu-exit-active"
      }`}
    >
      <div className="flex justify-between items-center m-4">
        <h2 className="font-medium text-xl">My Order</h2>
        <div
          className="cursor-pointer rounded-full p-1 bg-white/70 select-none"
          onClick={() => hideCheckout()}
        >
          <XMarkIcon className="h-5 w-5" />
        </div>
      </div>
      <div className="overflow-y-auto p-3 h-4/6 bg-white/40" ref={containerCartRef}>
        {context.cartProduct?.map((product, index) => (
          <OrderCard
            key={index}
            product={product}
            onDeleteProduct={onDeleteProduct}
          />
        ))}
      </div>
      <div className="w-full p-3 font-bold flex flex-col gap-2">
        <div className="flex justify-between">
          <p>TOTAL NETO</p>
          <p className="font-medium text-2xl">$ {priceFormat(totalPrice(context.cartProduct))}</p>
        </div>
        <div className="flex justify-between">
          <p>IVA (19%)</p>
          <p className="font-medium text-2xl">$ {priceFormat(totalTax(context.cartProduct))}</p>
        </div>
        <div className="flex justify-between">
          <p>TOTAL</p>
          <p className="font-medium text-2xl">
            ${" "}
            {priceFormat(
              totalPrice(context.cartProduct) + totalTax(context.cartProduct)
            )}
          </p>
        </div>
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
            totalPrice(context.cartProduct) === 0 ? "disabled:bg-sky-950" : ""
          }`}
          disabled={totalPrice(context.cartProduct) === 0}
        >
          PAGAR
        </button>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
