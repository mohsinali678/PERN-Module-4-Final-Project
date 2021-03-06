import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useHistory, withRouter } from "react-router-dom";
import apiURL from "../util/apiURL";

export default withRouter(function ProductDetails(props) {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const history = useHistory();
  const API = apiURL();
  const { addToCart } = props;

  let stock = "";
  let in_or_out_stock = "";

  product.in_stock = product.number_of_items > 0 ? true : false;

  if (product.in_stock) {
    stock = "green";
    in_or_out_stock = "In_Stock";
  } else {
    stock = "red";
    in_or_out_stock = "Out of Stock";
  }

  const deleteProduct = () => {
    axios
      .delete(`${API}/products/${id}`)
      .then(
        (response) => history.push(`/products`),
        (error) => console.error(error)
      )
      .catch((c) => console.warn(`catch ${c}`));
  };

  useEffect(() => {
    axios.get(`${API}/products/${id}`).then(
      (response) => setProduct(response.data.payload),
      (error) => {
        console.error(error);
        history.push(`/not-found`);
      }
    );
  }, [API, id, history]);

  const handleDelete = () => {
    deleteProduct();
  };

  return (
    <div className="Show_child">
      <div className="card" style={{ backgroundColor: "#DFDFDF" }}>
        <img id="cardImage" src={product.image_url} alt={product.name} />
        <h3>{product.name}</h3>
        <p style={{ textAlign: "justify" }}>
          <strong>Description: </strong>
          {product.description_of_item}
        </p>

        <div className="price_stock">
          <h4>Price: ${product.price}</h4>
          <div>
            <div className={stock}></div>
            <h3>{in_or_out_stock}</h3>
          </div>
          <h5>Remaining Items:{product.number_of_items}</h5>
        </div>
      </div>

      <div className="buttons">
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>

        <br />
        <br />
        <Link to={`/products/${id}/edit`}>
          <button>Edit</button>
        </Link>

        <br />
        <br />
        <Link to={`/products`}>
          <button>Go Back</button>
        </Link>

        <br />
        <br />
        <div>
          <button onClick={() => addToCart(product)}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
});
