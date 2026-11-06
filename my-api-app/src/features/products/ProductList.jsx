
import { useContext } from "react";

import ProductCard from "../../components/ProductCard";
import useFetch from "../../hooks/useFetch";
import { getProducts } from "./productServices";
import { AppContext } from "../../context/AppContext";

function ProductList() {

  const {
    data,
    loading,
    error,
    apiStatus,
    refetch
  } = useFetch(getProducts);

  const { addToCart } = useContext(AppContext);

  return (

    <div className="product-container">

      <h2>Available Food Items</h2>

      {/* LOADING */}

      {loading && (
        <h3>Loading food items...</h3>
      )}

      {/* SHOW ERROR ONLY */}

      {!loading && error && (

        <div className="api-error">

          <h3>⚠️ API ERROR</h3>

          <p>
            Error Type: {apiStatus?.type}
          </p>

          <p>
            Status Code: {apiStatus?.status ?? "N/A"}
          </p>

          <p>
            Status Text: {apiStatus?.statusText}
          </p>

          <p>
            API URL: {apiStatus?.apiUrl}
          </p>

          <p>
            Error Message: {apiStatus?.message}
          </p>

          <button onClick={refetch}>
            Retry API
          </button>

        </div>

      )}

      {/* SHOW PRODUCTS ONLY WHEN SUCCESS */}

      {!loading && !error && data.length > 0 && (

        <div className="product-list">

          {data.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />

          ))}

        </div>

      )}

      {/* EMPTY DATA */}

      {!loading && !error && data.length === 0 && (

        <p>No food items available.</p>

      )}

    </div>

  );

}

export default ProductList;
