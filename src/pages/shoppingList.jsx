import { useState } from "react";
import "./shoppingList.css"

function ShoppingList() {

    const [allProducts, setAllProducts] = useState([])
    const [product, setProduct] = useState({
        title: "",
        quantity: "",
    });

    function handleProduct(e) {
        const name = e.target.name;
        const value = e.target.value;

        let copy = { ...product };
        copy[name] = value;
        setProduct(copy)
    }

    function saveProduct() {
        console.log(product);

        setAllProducts([...allProducts, product])
    }

    return (


        <div className="shopping">
            <h1>Shopping List</h1>
            <div className="form">
                <div>
                    <label className="list-label">Product</label>
                    <input onChange={handleProduct} name="title" type="text" className="form-control" />
                </div>
                <div>
                    <label className="list-label">Quantity</label>
                    <input onChange={handleProduct} name="quantity" type="number" className="form-control" />
                </div>

                <button onClick={saveProduct} className="btn btn-dark">Save to list</button>

                <hr />
                <ul className="list">
                    {allProducts.map(prod => <li>{prod.title} - {prod.quantity}</li>)}
                </ul>

            </div>

        </div>


    )
}







export default ShoppingList;