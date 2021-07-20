import axios from "axios";
import { useState, useEffect } from "react";
import apiURL from "../util/apiURL.js"
import Product from "./Product.js"

export default function Products() {
    const API = apiURL();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`${API}/products`)
        .then(
            response => setProducts(response.data.payload)
        , 
            error => console.error(`Error: ${error}`)
        )
        .catch(c => console.warn(`Warning: ${c}`));
    }, [API])

    return (
        <div className="Products">
            <section>
                <div className="cardContainer">
                    {products.map((product, index) => {
                        return <Product key={index} product={product}/>
                    })}
                </div>
                    
            </section>
        </div>
    )
}
