import { useContext } from "react";
import { Card, Carousel, ProductDetail } from "../../Components/Common";
import CheckoutSideMenu from "../../Components/Common/CheckoutSideMenu";
import Layout from "../../Components/Containers/Layout";
import { CartContext } from "../../Context/CartContext";

const Home = () => {
  const context = useContext(CartContext);

  return (
    <Layout>
      <Carousel />
      <div className="flex w-80 justify-center items-center m-5 font-bold">
        <h1>Exclusive Products</h1>
      </div>
      <input
        className="w-96 rounded-lg focus:outline-none outline-none"
        type="text"
        placeholder="Search a product"
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />

      <div className="grid gap-x-4 gap-y-8 grid-cols-1 sm:grid-cols-4 w-full max-w-screen-lg my-10">
        {(context.filteredItems || context.items)?.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      <ProductDetail />
      <CheckoutSideMenu />
    </Layout>
  );
};

export default Home;
