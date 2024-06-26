import "./quantitypicker.css";
import { useState } from "react";

function QuantityPicker(props) {
const [quantity, setQuantity] = useState(1)

function increase() {
    let value = quantity + 1
    setQuantity(value)
    props.onChange(value);
}

function decrease() {
    if(quantity == 1) return;
    let value = quantity - 1
    setQuantity(value)
    props.onChange(value);
}



    return (
        <div className="qt-picker">
            <button className="btn btn-sm btn-outline-info" onClick={decrease}>-</button>
            <label>{quantity}</label>
            <button className="btn btn-sm btn-outline-info" onClick={increase}>+</button>
        </div>
    );
}

export default QuantityPicker;