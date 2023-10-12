/* eslint-disable react/prop-types */
import { CalendarIcon, ChevronRightIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import { priceFormat } from "../../../utils";

const OrdersCard = (props) => {
  const { totalPrice, totalTax, totalProducts, dateOrder } = props;

  return (
    <div className="w-80 bg-blue-200 flex justify-between items-center rounded-lg shadow-xl select-none mb-4 h-10 p-6">
      <span className="flex justify-between">
        <CalendarIcon className="h-5 w-5" /> {dateOrder}
      </span>

      <span className="flex justify-between">
        <ShoppingCartIcon className="h-5 w-5" /> {totalProducts}
      </span>

      <div className="flex flex-col items-end">
        <span className="font-bold">
          $ {priceFormat(totalPrice + totalTax)}
        </span>
      </div>
      <ChevronRightIcon className="h-5 w-5" />
    </div>
  );
};

export default OrdersCard;
