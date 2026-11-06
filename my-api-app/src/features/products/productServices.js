
import axios from "axios";

const API_URL =
  "https://dummyjson.com/products/category/groceries";

export const getProducts = async () => {

  try {

    const response = await axios.get(API_URL, {
      timeout: 10000
    });

    return {
      products: response.data.products,
      status: response.status,
      statusText: response.statusText,
      apiUrl: API_URL
    };

  } catch (error) {

    if (error.response) {

      throw {
        type: "SERVER ERROR",
        status: error.response.status,
        statusText: error.response.statusText,
        message: error.response.data?.message || "API request failed",
        apiUrl: API_URL
      };

    } else if (error.request) {

      throw {
        type: "NETWORK ERROR",
        status: null,
        statusText: "No Response",
        message: error.message,
        apiUrl: API_URL
      };

    } else {

      throw {
        type: "REQUEST ERROR",
        status: null,
        statusText: "Request Failed",
        message: error.message,
        apiUrl: API_URL
      };

    }

  }

};
