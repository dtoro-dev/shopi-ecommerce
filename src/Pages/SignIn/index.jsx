import { useState } from "react";
import { Layout } from "../../Components/Containers";

const SignIn = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setLogin({
      ...login,
      [name]: value,
    });
  };

  return (
    <Layout>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-blue-200 p-8 rounded-lg shadow-xl w-96">
          <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-medium"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 mt-1 border rounded focus:outline-none focus:ring focus:border-blue-300"
                placeholder="example@example.com"
                onChange={(event) => handleInputChange(event)}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-medium"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full p-2 mt-1 border rounded focus:outline-none focus:ring focus:border-blue-300"
                placeholder="********"
                onChange={(event) => handleInputChange(event)}
              />
            </div>
            <button
              className={`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded ${
                login.email.length && login.password.length
                  ? ""
                  : "disabled:bg-sky-950"
              }`}
              disabled={login.email.length === 0 || login.password.length === 0}
              // onClick={() => handleCheckout()}
            >
              SignIn
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;
