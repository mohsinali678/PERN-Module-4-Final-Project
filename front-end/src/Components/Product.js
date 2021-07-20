import { Link } from "react-router-dom";

export default function Product({ product }) {
    return (
            <tr>
                <td>
                    
                </td>
                <td>
                    
                </td>
                <td>
                    <Link to={`/products/${product.id}`}>✏️</Link>
                </td>
            </tr>
    )
}
