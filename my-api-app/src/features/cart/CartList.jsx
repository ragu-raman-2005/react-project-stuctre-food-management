
import { useContext } from "react";

import { AppContext } from "../../context/AppContext";
import Button from "../../components/Button";
import { formatPrice } from "../../utils/helpers";

function CartList() {

  const {
    cart,
    increaseQty,
    decreaseQty,
    removeItem
  } = useContext(AppContext);

  // Calculate total amount
  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (

    <div className="cart-container">

      <h2>🛒 My Cart</h2>

      {cart.length === 0 ? (

        <p>Your cart is empty!</p>

      ) : (

        cart.map((item) => (

          <div className="cart-item" key={item.id}>

            <h3>{item.title}</h3>

            <p>
              Price: {formatPrice(item.price)}
            </p>

            <Button
              onClick={() => decreaseQty(item.id)}
            >
              -
            </Button>

            <span>{item.quantity}</span>

            <Button
              onClick={() => increaseQty(item.id)}
            >
              +
            </Button>

            <p>
              Subtotal: {
                formatPrice(item.price * item.quantity)
              }
            </p>

            <Button
              color="red"
              onClick={() => removeItem(item.id)}
            >
              Remove
            </Button>

          </div>

        ))

      )}

      <h2>Total Amount: {formatPrice(total)}</h2>

    </div>
  );
}

export default CartList;
