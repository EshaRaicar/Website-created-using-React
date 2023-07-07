import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper blue">
                <Link to="/" className="brand-logo center"></Link>
                <ul id="nav-mobile" className="right">
                    <li>
                        <Link to="/Cocktails">Cocktails</Link>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Documentation">Documentation</Link>
                    </li>
                    <li>
                        <Link to="/CustomCreations">
                            Custom Cocktail Creations
                        </Link>
                    </li>
                    <li>
                        <Link to="/CustomCocktailsList">
                            Customized Cocktails List
                        </Link>
                    </li>
                    <li>
                        <Link to="/FavoriteList">FavPage</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
