//the imports goes here
import { useContext } from "react";
import "./navbar.css";

import { Link } from "react-router-dom";
import DataContext from "../context/dataContext";
//the logic goes here

function Navbar() {

const user= useContext(DataContext).user;


    return(
        <nav className="navbar navbar-expand-lg " data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            Organika
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/catalog">
                  Catalog
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/admin">
                  Admin
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/shoppingList">
                  Shopping List
                </Link>
              </li>

            </ul>
            <form className="d-flex" role="search">
              <label className="btn btn-outline-dark">{user.name}</label>
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    )      
}


//the exports goes here
export default Navbar;