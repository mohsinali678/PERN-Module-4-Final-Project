import Products from "../Components/Products.js";

export default function Index(props) {
  const { addToCart } = props;
  return (
    <div className="Index">
      <div className="centered-heading">
        <h2>Index</h2>
      </div>
      <Products addToCart={addToCart} />
    </div>
  );
}
