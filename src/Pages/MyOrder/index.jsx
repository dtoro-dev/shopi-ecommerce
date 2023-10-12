import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { OrderCard } from "../../Components/Common";
import { Layout } from "../../Components/Containers";
import { CartContext } from "../../Context/CartContext";

const MyOrder = () => {
  const context = useContext(CartContext);
  const currentPath = window.location.pathname;
  const index = currentPath.substring(currentPath.lastIndexOf("/") + 1);

  return (
    <Layout>
      <div className="relative flex w-80 justify-center items-center m-5 font-bold">
        <Link to="/my-orders" className="absolute left-0">
          <ChevronLeftIcon className="w-6 text-black cursor-pointer hover:bg-slate-400 hover:text-white rounded-full transition ease-in-out hover:scale-11 duration-300" />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="flex flex-col w-80">
        {context.order?.[
          index === "last" ? context.order?.length - 1 : index
        ]?.products.map((product) => {
          return (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              images={product.images}
              price={product.price}
            />
          );
        })}
      </div>
    </Layout>
  );
};

export default MyOrder;
