import { ShoppingCart } from "./components/ShoppingCart";
import { DATA } from "./data/Data";
import { ListItems } from "./components/ListItems";

function App() {
  const products = DATA.products;

  return (
    <div>
      <h1
        style={{
          backgroundColor: "blue",
          textAlign: "center",
          margin: "10px",
          padding: "10px",
        }}
      >
        Small Shopping Cart
      </h1>
      <ListItems products={products} />
    </div>
  );
}

export default App;
