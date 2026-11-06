
import ProductList from "./features/products/ProductList";
import CartList from "./features/cart/CartList";

import "./index.css";

function App() {

  return (

    <div className="app">

      <header>

        <h1>🍔 Canteen Management System</h1>

        <p>Welcome to Our Canteen</p>

      </header>

      <ProductList />

      <CartList />

      <footer>
        <p>© 2026 Canteen Management System</p>
      </footer>

    </div>

  );
}

export default App;
