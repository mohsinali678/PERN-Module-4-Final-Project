import React from "react";

export default function Cart(props) {
  const { cartContent } = props;
  return (
    <div>
      {cartContent.map((product) => {
        return (
          <div className="card">
            <img id="cardImage" src={product.image_url} alt={product.name} />
            <h3>{product.name}</h3>
            <input id="numberInput" type="number" />
            <h4>Price: ${product.price}</h4>
          </div>
        );
      })}
    </div>
  );
}
