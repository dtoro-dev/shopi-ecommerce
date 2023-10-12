import axios from "axios";

const API = "https://api.escuelajs.co/api/v1/categories";

const getCategory = async () => {
  try {
    const { data } = await axios.get(API);
    return data;
  } catch (error) {
    console.error(error);
    return { error };
  }
};

export { getCategory };
