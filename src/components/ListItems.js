import React, { useState, useEffect } from "react";

import "./listItems.css";
import Product from "./Product";
import { ShoppingCart } from "./ShoppingCart";

export const ListItems = ({ products }) => {
  const [cart, setCart] = useState([]);
  const [totalCart, setTotalCart] = useState(0);

  useEffect(() => {
    total();
  }, [cart]);

  const total = () => {
    let totalValue = 0;
    for (let i = 0; i < cart.length; i++) {
      totalValue += cart[i].price * cart[i].quantity;
    }
    setTotalCart(totalValue);
  };

  const addToCart = (product) => {
    const exist = cart.find((elem) => elem.id === product.id);

    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeOne = (product) => {
    const exist = cart.find((elem) => elem.id === product.id);
    if (exist.quantity === 1) {
      return;
    } else {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };

  const removeFromCart = (elem) => {
    let copyArr = [...cart];
    copyArr = copyArr.filter((cartItem) => cartItem.id !== elem.id);
    setCart(copyArr);
  };

  return (
    <div className="principal-grid">
      <div className="">
        <h2 className="title-1">Product list</h2>
        <div className="">
          <div className="card-body">
            <Product products={products} addToCart={addToCart} />
          </div>
        </div>
      </div>

      <div className="grid-2">
        <h2 className="title-2">Basquet</h2>
        <div className="">
          <div className="basquet">
            <ShoppingCart cart={cart} removeOne={removeOne} addToCart={addToCart} removeFromCart={removeFromCart} />
            {cart.length > 0 ? (
              <div className="total">
                <p>Total: ${totalCart}</p>
              </div>
            ) : (
              <div className="is_empty">
                <h5>Cart is empty</h5>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
