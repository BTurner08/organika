import "./product.css"
import QuantityPicker from "./quantitypicker";

function Proudct (props) {
    function add() {
        console.log("Add clicked")
    }

    return (
        <div className="product">
            
            <img src={"/imgs/" + props.data.image} />
            <h4>{props.data.title}</h4>

            <label className="total">${props.data.price}</label>
            <label className="price">${props.data.price}</label>

            <QuantityPicker />

            <button onClick={add} className="btn btn-sm btn-primary">Add to cart</button>
        </div>
    );
}

export default Proudct;