import axios from "axios";
import { useState, useEffect } from "react";
import apiURL from "../util/apiURL.js";
import Product from "./Product.js";

export default function Products(props) {
  //INITIALIZING VARIABLES
  const API = apiURL();
  const [products, setProducts] = useState([]);
  const { addToCart } = props;

  //SET STATE VARIABLE UPON PAGE LOAD
  useEffect(() => {
    axios
      .get(`${API}/products`)
      .then(
        (response) => setProducts(response.data.payload),
        (error) => console.error(`Error: ${error}`)
      )
      .catch((c) => console.warn(`Warning: ${c}`));
  }, [API]);

  return (
    <div className="Products">
      <section>
        <div className="cardContainer">
          {products.map((product, index) => {
            return (
              <Product key={index} product={product} addToCart={addToCart} />
            );
          })}
        </div>
      </section>
    </div>
  );
}
