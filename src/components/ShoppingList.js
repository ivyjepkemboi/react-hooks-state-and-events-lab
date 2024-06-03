import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  // Initialize state for  selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // function to update the selected category
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // Filter the items based selected category
  const itemsToDisplay = selectedCategory === "All"
    ? items
    : items.filter(item => item.category === selectedCategory);

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryChange} value={selectedCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
