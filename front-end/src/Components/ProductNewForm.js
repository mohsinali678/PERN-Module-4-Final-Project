import { useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import axios from "axios";
import apiURL from "../util/apiURL.js"

export default withRouter(function ProductNewForm() {
    //INITIALIZING VARIABLES
    const API = apiURL();
    const [product, setProduct] = useState({
        name : "",
        image_url : "",
        file : null,
        price : 0,
        number_of_items: 0,
        description_of_item:"",
        in_stock : false
    });
    // const [file, setFile] = useState(null);
    const history = useHistory();


    // Add Product Function
    const addProduct = (newProduct) => {
        axios.post(`${API}/products`, newProduct)
            .then(
                (response) => {
                    history.push("/products");
                }
                ,
                (error) => {
                    console.error(`Error: ${error}`)
                }
            )
            .catch(c => console.warn(`Warning: ${c}`));
        
        
            
    }


    //Handle Text Change
    const handleTextChange = (event) => {
        setProduct({...product, [event.target.id] : event.target.value});
    }


    //File Select Handler
    const fileSelectHandler = (event) => {
        product[event.target.id] = event.target.files[0]; 
        product['image_url'] = URL.createObjectURL(product[event.target.id])
    }


    //Handle Submit
    const handleSubmit = (event) => {
        event.preventDefault();
        addProduct(product);
    }
    

    return (
        <div className="New">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input 
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Name of Product"
                    value={product.name}
                    onChange={handleTextChange}
                    required
                />
                <br />

                <label htmlFor="file">Image URL:</label>
                <input
                    id="file"
                    name="file"
                    type="file"
                    onChange={fileSelectHandler}
                    required
                />
                <br />
                
                <label htmlFor="price">Price:</label>
                <input
                    id="price"
                    name="price"
                    type="number"
                    placeholder="Price $0.00"
                    value={product.price}
                    onChange={handleTextChange}
                    required
                />
                <br />

                <label htmlFor="number_of_items">Total Number of Items:</label>
                <input
                    id="number_of_items"
                    name="number_of_items"
                    type="number"
                    placeholder="Total Number of items available for sale"
                    value={product.number_of_items}
                    onChange={handleTextChange}
                    required
                />
                <br /> 

                <label htmlFor="description_of_item">Description:</label>
                <textarea
                    id="description_of_item"
                    name="description_of_item"
                    placeholder="Describe the item....."
                    value={product.description_of_item}
                    onChange={handleTextChange}
                    required
                />
                <br /> 

                <input type="submit" />
            </form>
        </div>
    )
});