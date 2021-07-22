import { Link } from "react-router-dom";

export default function Product(props) {
    const { product }  = props;
    let stock = ""
    let in_or_out_stock = ""
    
    product.in_stock = product.number_of_items > 0 ? true : false;


    if(product.in_stock){   
        stock = "green"
        in_or_out_stock = "In_Stock"
    }else{
        stock = "red"
        in_or_out_stock = "Out of Stock"
    }

    return (
        <Link to={`/products/${product.id}/`}>
            <div className='card'>
                <img src={product.image_url} alt={product.name} />
                <h3>{product.name}</h3>
                <h4>Price: ${product.price}</h4>
                <br /><br />

                <div className="price_stock">
                    <div className={stock}></div><h3>{in_or_out_stock}</h3>
                </div>
            </div>
        </Link>
    )
}
