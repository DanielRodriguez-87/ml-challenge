import axios from "./../helpers/axios";

export const getProductsByQuery = async (query) => {  
  return await axios.get("/items", {
    params: { q: query },
  });
};

export const getProductById = async (productId) => {
  return await axios.get(`/items/${productId}`);
};
