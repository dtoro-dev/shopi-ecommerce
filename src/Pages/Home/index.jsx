import { useEffect, useState } from "react";
import { getProducts } from "../../Api/products";
import { Card, Carousel, ProductDetail } from "../../Components/Common";
import CheckoutSideMenu from "../../Components/Common/CheckoutSideMenu";
import Layout from "../../Components/Containers/Layout";

const Home = () => {
  const [items, setItems] = useState([]);

  const init = async () => {
    const products = await getProducts();
    setItems(products ?? []);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <Layout>
      <Carousel />
      <div className="grid gap-x-4 gap-y-8 grid-cols-1 sm:grid-cols-4 w-full max-w-screen-lg my-10">
        {items?.map((item) => (
          <Card
            key={item.id}
            item={item}
          />
        ))}
      </div>
      <ProductDetail />
      <CheckoutSideMenu />
    </Layout>
  );
};

export default Home;
