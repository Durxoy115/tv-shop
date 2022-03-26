import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Extra from "../extra/Extra";

import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleAddToCart = (product) => {
    //console.log(product);
    const newCart = [...cart, product];
    //console.log(cart);

    if (cart.length <= 3) {
      setCart(newCart);
    } else {
      alert("You can't chose more then four items");
    }
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} chooseAgain={chooseAgain}></Cart>
      </div>
      <div>
        <Extra></Extra>
      </div>
    </div>
  );
};

export default Shop;
