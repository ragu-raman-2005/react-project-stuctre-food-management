
import Button from "./Button";

function ProductCard({ product, addToCart }) {

  return (
    <div className="product-card">

      <img
        src={product.thumbnail}
        alt={product.title}
      />

      <h3>{product.title}</h3>

      <p>{product.description}</p>

      <h3>₹{product.price}</h3>

      <Button onClick={() => addToCart(product)}>
        Add to Cart
      </Button>

    </div>
  );
}

export default ProductCard;
