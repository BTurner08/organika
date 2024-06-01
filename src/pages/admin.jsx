import { useState } from "react";
import "./admin.css"

function Admin() {
    const [coupon, setCoupon] = useState({
        code: '',
        discount: ''
    });


    function saveCoupon() {
        console.log("Saved Coupon", coupon)
    }

    function handleCoupon(e) {
        const value = e.target.value
        const name = e.target.name
        console.log("input changed", value)

        coupon[name] = value
    }
    return (
        <div className="admin">
            <h1>Store Administration</h1>
            <div className="parent">
                <div className="products form">
                    <h3>Register Product</h3>
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