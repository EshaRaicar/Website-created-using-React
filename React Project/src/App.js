import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Documentation from "./pages/Documentation";
import Cocktails from "./components/Cocktails";
import FavoriteList from "./components/FavoriteList";
import CustomCreations from "./components/CustomCreations";
import CustomCocktailsList from "./components/CustomCocktailsList";

function App() {
    const [favCocktails, setFavCocktails] = useState([]);

    function markAsFav(cocktailFav) {
        console.log("hi from child, but in app.js ", cocktailFav);
        setFavCocktails([...favCocktails, cocktailFav]);
    }

    const [customCocktails, setCustomCocktails] = useState([]);

    function saveCustomCocktail(cocktailCustom) {
        console.log("custom cocktails in app.js ", cocktailCustom);
        setCustomCocktails([...customCocktails, cocktailCustom]);
    }

    useEffect(() => {
        const data = localStorage.getItem("customCocktails");
        console.log("fetched data: ", data);

        if (data) {
            console.log("is data: ", data);
            setFavCocktails(JSON.parse(data));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(
            "customCocktails",
            JSON.stringify(customCocktails)
        );
    }, [customCocktails]);

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Documentation" component={Documentation} />
                <Route
                    exact
                    path="/FavoriteList"
                    component={() => <FavoriteList favorites={favCocktails} />}
                />
                <Route
                    exact
                    path="/Cocktails"
                    component={() => <Cocktails markAsFav={markAsFav} />}
                />
                <Route
                    exact
                    path="/CustomCreations"
                    component={() => (
                        <CustomCreations
                            saveCustomCocktail={saveCustomCocktail}
                        />
                    )}
                />
                <Route
                    exact
                    path="/CustomCocktailsList"
                    component={() => (
                        <CustomCocktailsList custCocktail={customCocktails} />
                    )}
                />
            </Switch>
        </Router>
    );
}

export default App;
