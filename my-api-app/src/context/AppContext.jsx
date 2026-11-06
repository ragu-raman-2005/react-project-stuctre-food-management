
import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {

  const [cart, setCart] = useState([]);

  // Add product to cart
  const addToCart = (product) => {

    setCart((previousCart) => {

      const existing = previousCart.find(
        (item) => item.id === product.id
      );

      if (existing) {

        return previousCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

      }

      return [
        ...previousCart,
        { ...product, quantity: 1 }
      ];

    });
  };

  // Increase quantity
  const increaseQty = (id) => {

    setCart((previousCart) =>
      previousCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQty = (id) => {

    setCart((previousCart) =>
      previousCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove product
  const removeItem = (id) => {

    setCart((previousCart) =>
      previousCart.filter((item) => item.id !== id)
    );
  };

  return (

    <AppContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeItem
      }}
    >

      {children}

    </AppContext.Provider>
  );
}
