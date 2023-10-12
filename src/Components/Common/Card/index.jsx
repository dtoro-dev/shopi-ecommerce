/* eslint-disable react/prop-types */
import { CheckIcon, EyeIcon, PlusIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";

const Card = (props) => {
  const { category, images, title, price } = props.item;
  const context = useContext(CartContext);

  const showProduct = () => {
    context.showProductDetail();
    context.setProductToShow(props.item);
    context.hideCheckoutSideMenu();
  };

  const addToCart = (event) => {
    event.stopPropagation();

    context.setCartProduct([...context.cartProduct, props.item]);
    context.showCheckoutSideMenu();
    context.hideProductDetail();
  };

  const renderIcon = () => {
    let isExistsProduct = context.cartProduct.find(
      (item) => item.id === props.item.id
    );

    if (isExistsProduct) {
      return (
        <div className="absolute top-2 right-2 flex justify-center items-center bg-green-200 w-6 h-6 rounded-full font-bold cursor-pointer select-none">
          <CheckIcon className="h-6 w-6" />
        </div>
      );
    } else {
      return (
        <div
          className="absolute top-2 right-2 flex justify-center items-center bg-blue-200 w-6 h-6 rounded-full font-bold cursor-pointer select-none hover:bg-white/70 transition ease-in-out delay-200 hover:scale-11 duration-300"
          onClick={(event) => addToCart(event)}
        >
          <PlusIcon className="h-6 w-6" />
        </div>
      );
    }
  };

  return (
    <>
      <div className="bg-blue-200 cursor-pointer w-60 h-64 rounded-lg shadow-lg mx-auto select-none">
        <figure className="relative mb-3 w-full h-4/5">
          <div
            className="absolute top-2 left-2 flex justify-center items-center bg-blue-200 w-6 h-6 rounded-full font-bold cursor-pointer select-none hover:bg-white/70 transition ease-in-out delay-200 hover:scale-11 duration-300"
            onClick={() => showProduct()}
          >
            <EyeIcon className="h-6 w-6" />
          </div>
          <span className="absolute bottom-2 left-2 bg-white/60 rounded-xl text-black text-xs px-2">
            {category.name}
          </span>
          <img
            className="h-full w-full object-cover rounded-t-lg"
            src={images[0]}
            alt={title}
          />
          {renderIcon()}
        </figure>
        <div className="flex justify-between items-center px-1">
          <p className="text-sm">{title}</p>
          <p className="text-lg font-bold">$ {price}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
