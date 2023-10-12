import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Card, Carousel, ProductDetail } from "../../Components/Common";
import Layout from "../../Components/Containers/Layout";
import { CartContext } from "../../Context/CartContext";

const Home = () => {
  const context = useContext(CartContext);
  const { category } = useParams();

  const renderCard = () => {
    if (context.searchByTitle.length) {
      if (context.filteredItems.length) {
        const itemToRender = category
          ? context.filteredItems.filter(
            (item) =>
              item.category.name?.toLowerCase() === category?.toLowerCase()
          )
          : context.filteredItems;

        return (
          <div className="grid gap-x-4 gap-y-8 grid-cols-1 sm:grid-cols-4 w-full max-w-screen-lg my-10 ">
            {itemToRender?.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        );
      } else {
        return (
          <div className="flex justify-center items-center w-full h-60 text-center">
            <h1 className="text-xl font-bold">Product Not Found</h1>
          </div>
        );
      }
    } else {
      const itemToRender = category
        ? context.items.filter(
          (item) =>
            item.category.name?.toLowerCase() === category?.toLowerCase()
        )
        : context.items;

      return (
        <div className="grid gap-x-4 gap-y-8 grid-cols-1 sm:grid-cols-4 w-full max-w-screen-lg my-10 ">
          {itemToRender?.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      );
    }
  };

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
      {renderCard()}
      <ProductDetail />
    </Layout>
  );
};

export default Home;
