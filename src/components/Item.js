import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  function handleAddToCart() {
    setIsInCart(prevIsInCart => !prevIsInCart);
  }

  const itemClass = isInCart ? "in-cart" : "";


  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddToCart} className="add">  {isInCart ? "Remove From Cart" : "Add to Cart"}</button>
      
      
    </li>
  );
}

export default Item;
