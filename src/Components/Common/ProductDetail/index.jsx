import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import "./styles.css";

const ProductDetail = () => {
  const context = useContext(CartContext);

  const hideProduct = () => {
    context.hideProductDetail();
    context.setProductToShow({});
  };

  return (
    <aside
      className={`product-detail flex flex-col fixed right-0 bg-blue-200 px-5 z-20 ${
        context.isProductDetailOpen
          ? "product-detail-exit product-detail-enter-active"
          : "product-detail-enter product-detail-exit-active"
      }`}
    >
      <div className="flex justify-between items-center my-4">
        <h2 className="font-medium text-xl">Detail</h2>
        <div
          className="cursor-pointer rounded-full p-1 bg-white/70 select-none"
          onClick={() => hideProduct()}
        >
          <XMarkIcon className="h-5 w-5" />
        </div>
      </div>
      <figure className="my-3">
        <img
          className="rounded-md border-2 border-black w-full h-full"
          style={{ maxWidth: "100%", maxHeight: "300px", objectFit: "cover" }}
          src={
            context.productToShow.images?.length
              ? context.productToShow.images[0]
              : context.productToShow.images
          }
          alt={context.productToShow.title}
        />
      </figure>
      <p className="flex flex-col px-6 text-justify">
        <span className="flex justify-between font-medium text-2xl mb-2">
          $ {context.productToShow.price}{" "}
          <button type="button">add to cart</button>
        </span>
        <span className="font-medium text-md">
          {context.productToShow.title}
        </span>
        <span className="font-light text-md">
          {context.productToShow.description}
        </span>
      </p>
    </aside>
  );
};

export default ProductDetail;
