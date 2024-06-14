import { useState } from "react";
import DataContext from "./dataContext";


function GlobalProvider(props){
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({id:123, name:"Blake"});

    function addProductToCart(product) {
        console.log("Global Add")
        setCart([...cart, product]);
    }
    function removeProductFromCart() {

    }

    return (
        <DataContext.Provider value={{
            cart: cart,
            user: user,
            addProductToCart: addProductToCart,
            removeProductFromCart: removeProductFromCart,
        }}>
            {props.children}
        </DataContext.Provider>
    );
}

export default GlobalProvider;