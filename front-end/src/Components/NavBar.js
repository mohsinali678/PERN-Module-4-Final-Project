import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/">HOME</Link>
      </h1>
      <h1>
        <Link to="/products">View All Products</Link>
      </h1>
      <button>
        <Link to="/products/new">Add New Product</Link>
      </button>
    </nav>
  );
}
