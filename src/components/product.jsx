import { useState } from "react";
import "./product.css"
import QuantityPicker from "./quantitypicker";

function Proudct (props) {
    const [quantity, setQuantity] = useState(1)
    function add() {
        console.log("Add clicked")
    }
function handleQuantity(qty){
    console.log("Quantity has changed", qty);
    setQuantity(qty);
}

function getTotal(){
    let total = props.data.price * quantity;
    return total.toFixed(2)
}
    return (
        <div className="product">
            
            <img src={"/imgs/" + props.data.image} />
            <h4>{props.data.title}</h4>

            <label className="total">${getTotal()}</label>
            <label className="price">${props.data.price}</label>

            <QuantityPicker onChange={handleQuantity}/>

            <button onClick={add} className="btn btn-sm btn-primary">Add to cart</button>
        </div>
    );
}

export default Proudct;