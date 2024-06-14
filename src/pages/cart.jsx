import { useContext, useState } from "react";
import "./cart.css";
import DataContext from "../context/dataContext";


function Cart() {
    const cart = useContext(DataContext).cart;
    const [displayProd, setDisplayProd] = useState([])

    function getNumberOfProds() {
        let total = 0
        for (let i = 0; i < cart.length; i++) {
            let prod = cart[i];
            total += prod.quantity;
        }

        return total;
    }
    function getTotal(prod){
    let total = prod.quantity * prod.price;
    return total.toFixed(2);
}

    return (
        <div className="cart">
            <h1>We are almost there!</h1>
            <h5>We have {getNumberOfProds()} products ready for you!</h5>
            <div className="list">
            
                {cart.map( prod => <div className="cart-prod">
                    <img src={"/imgs/" + prod.image} />
                    <h4>{prod.title}</h4> 
                    <label>${prod.price.toFixed(2)}</label>
                    <label>#{prod.quantity}</label>
                    <label>${getTotal(prod)}</label>
                    <button className="btn btn-sm btn-outline-danger">Remove</button>
                    </div>)}
            </div>
        </div>
    );
}






export default Cart;