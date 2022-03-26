import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import ChooseItem from "../choseitem/ChooseItem";
import "./Cart.css";

const Cart = (props) => {
  const { cart, chooseAgain } = props;
  const randItem = Math.floor(Math.random() * cart.length);
  const randTv = cart[randItem];
  //console.log("props", props);
  const [item, setItem] = useState([]);

  const chooseItem = () => {
    const emptyArray = [];
    emptyArray.push(randTv);
    setItem(emptyArray[0]);
  };
  return (
    <div className="items">
      <h3>Selected Items</h3>
      {cart.map((product) => (
        <div className="selected-items">
          <div>
            <img src={product.image} alt="" />
          </div>
          <div>
            <p className="cart-name">{product.name}</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon>
          </div>
        </div>
      ))}
      <button className="btn-style" onClick={chooseItem}>
        {" "}
        Chose 1 item
      </button>
      <ChooseItem item={item}></ChooseItem>

      <button className="second-button" onClick={chooseAgain}>
        Choose Again
      </button>
    </div>
  );
};

export default Cart;
