import "./catalog.css"
import Proudct from "../components/product";
import { Button } from "bootstrap";


function Catalog() {

    let categories = ["Fruit","Merchandise","Dairy"]

    let products = [
        {
            title: "Orange",
            category: "Fruit",
            price:12.33,
            image:"oranges.jpg",
            _id: "0",
        },
        {
            title: "Banana",
            category: "Fruit",
            price:10.99,
            image:"bananas.jpg",
            _id: "1",
        },
        {
            title: "Kiwi",
            category: "Fruit",
            price:17.38,
            image:"kiwi.jpg",
            _id: "2",
        },
        {
            title: "Apples",
            category: "Fruit",
            price:8.79,
            image:"apples.jpg",
            _id: "3",
        },
        {
            title: "Cantaloupe",
            category: "Fruit",
            price:17.89,
            image:"canteloupe.jpg",
            _id: "4",
        },
        {
            title: "Cheese",
            category: "Dairy",
            price:20.11,
            image:"cheese.jpg",
            _id: "5",
        },
        {
            title: "Vitamins",
            category: "Merchandise",
            price:30.99,
            image:"vitamins.jpg",
            _id: "6",
        },
    ];
    
    return(
        <div className="catalog">
        <h2>Check out our catalog!</h2>

    <div className="filters">
        {categories.map( cat => <button className="btn btn-sm btn-outline-dark">{cat}</button>)}
    </div>
    <div className="list">
        {products.map( prod => <Proudct key={prod._id} data={prod} />)}
    </div>
    </div>
    );
}

export default Catalog;