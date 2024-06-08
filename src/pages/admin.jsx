import { useState } from "react";
import "./admin.css"

function Admin() {
    const [allCoupons, setAllCoupons] = useState([]);
    const [coupon, setCoupon] = useState({
        code: '',
        discount: ''
    });
    const [allProducts, setAllProducts] = useState([])
    const [product, setProduct] = useState ({
        title: "",
        price: "",
        image: "",
        category: "",
    });

    function saveCoupon() {
        console.log("Saved Coupon", coupon)

        setAllCoupons([...allCoupons, coupon]);
    }

    function handleCoupon(e) {
        const value = e.target.value
        const name = e.target.name
        
        let copy = {...coupon};
        copy[name] = value;
        setCoupon(copy);
    }

    function handleProduct(e){
        const name = e.target.name;
        const value = e.target.value;
        
        let copy = {...product};
        copy[name] = value;
        setProduct(copy)
    }

    function saveProduct(){
        console.log(product);

        setAllProducts([...allProducts, product])
    }
    return (
        <div className="admin">
            <h1>Store Administration</h1>
            <div className="parent">
                <div className="products form">
                    <h3>Register Product</h3>

                    <div>
                        <label className='form-label'>Title</label>
                        <input onChange={handleProduct} type="text" name="title" className="form-control" />
                    </div>

                    <div>
                        <label className='form-label'>Price</label>
                        <input onChange={handleProduct} type="number" name="price" className="form-control" />
                    </div>

                    <div>
                        <label className='form-label'>Image</label>
                        <input onChange={handleProduct} type="text" name="image" className="form-control" />
                    </div>
                    
                    <div>
                        <label className='form-label'>Category</label>
                        <input onChange={handleProduct} type="text" name="category" className="form-control" />
                    </div>

                    <button onClick={saveProduct} className="btn btn-dark">Save product</button>

                    <hr />
                    <ul className="list">
                        {allProducts.map( prod => <li>{prod.title} - ${prod.price}</li>)}
                    </ul>

                </div>

                <div className="coupon form">
                    <h2>Register a Coupon</h2>
                    <div>
                        <label className="form-label">Code</label>
                        <input onChange={handleCoupon} name="code" type="text" className="form-control" />
                    </div>
                    <div>
                        <label className="form-label">Discount</label>
                        <input onChange={handleCoupon} name="discount" type="number" className="form-control" />
                    </div>
                    <button onClick={saveCoupon} className="btn btn-outline-dark">Save Coupon</button>

                    <hr />

                    <ul className="list">
                        {allCoupons.map( cp => <li>{cp.code} - ${cp.discount}</li>)}
                    </ul>

                </div>
            </div>
        </div>
    );
}

/**
 * Product
 * 
 * title
 * price
 * category
 * image
 * 
 */



export default Admin;