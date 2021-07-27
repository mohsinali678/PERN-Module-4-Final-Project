import ProductDetails from "../Components/ProductDetails";

export default function Show(props) {
  const { addToCart } = props;
  return (
    <div className="Show">
      <div className="centered-heading">
        <h2>Show</h2>
      </div>
      <div>
        <ProductDetails addToCart={addToCart} />
      </div>
    </div>
  );
}
