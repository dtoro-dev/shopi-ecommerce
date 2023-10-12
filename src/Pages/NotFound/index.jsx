import { Layout } from "../../Components/Containers";

const NotFound = () => {
  return (
    <Layout>
      <div className="flex w-96 h-60 flex-col justify-center items-center bg-blue-200 rounded-lg mt-20">
        <h1 className="text-2xl font-bold">
        Not Found
        </h1>
        <p className="font-bold">404</p>
      </div>
    </Layout>
  );
};

export default NotFound;
