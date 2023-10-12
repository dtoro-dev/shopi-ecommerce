/* eslint-disable react/prop-types */
import { XMarkIcon } from "@heroicons/react/24/solid";

const OrderCard = (props) => {
  const { id, title, price, images } = props;

  return (
    <div className="w-full bg-white flex justify-between items-center rounded-lg shadow-lg mx-auto select-none mb-2 pr-1">
      <div className="flex items-center gap-2 h-full">
        <figure className="h-20 w-20">
          <img
            className="h-full w-full object-cover rounded-l-lg"
            src={images?.length ? images[0] : images}
            alt={title}
          />
        </figure>
        <p className="text-sm text-light font-medium">{title}</p>
      </div>
      <div className="h-full w-20 flex justify-between items-center">
        <p className="text-lg">$ {price}</p>
        {props.onDeleteProduct ? (
          <span onClick={() => props.onDeleteProduct(id)}>
            <XMarkIcon className="w-6 text-black cursor-pointer hover:bg-slate-400 rounded-full transition ease-in-out hover:scale-11 duration-300" />
          </span>
        ) : ""}
      </div>
    </div>
  );
};

export default OrderCard;
