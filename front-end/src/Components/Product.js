import { Link } from "react-router-dom";

export default function Product(props) {
    const { product }  = props;
    let stock = ""
    let in_or_out_stock = ""
    
    if(product.in_stock){   
        stock = "green"
        in_or_out_stock = "In_Stock"
    }else{
        stock = "red"
        in_or_out_stock = "Out of Stock"
    }

    return (
        <Link to={`/products/:id/`}>
            <div className='card'>
                <img src={product.image_url} alt={product.name} />
                <h3>{product.name}</h3>
                <h4>Price: ${product.price}</h4>
                <br /><br />

                <div class="price_stock">
                    <div className={stock}></div><h3>{in_or_out_stock}</h3>
                </div>
            </div>
        </Link>
    )
}
