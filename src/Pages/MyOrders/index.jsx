import moment from "moment/moment";
import { useContext } from "react";
import { Link } from "react-router-dom";
import OrdersCard from "../../Components/Common/OrdersCard";
import { Layout } from "../../Components/Containers";
import { CartContext } from "../../Context/CartContext";

const MyOrders = () => {
  const context = useContext(CartContext);

  return (
    <Layout>
      <div className="flex w-80 justify-center items-center m-5 font-bold">
        <h1>My Orders</h1>
      </div>
      {context.order?.map((order, index) => (
        <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard
            totalPrice={order.totalPrice}
            totalTax={order.totalTax}
            totalProducts={order.totalProducts}
            dateOrder={moment(order.date).format("DD.MM.YYYY")}
          />
        </Link>
      ))}
    </Layout>
  );
};

export default MyOrders;
