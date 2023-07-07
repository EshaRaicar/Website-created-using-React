import React, { useState, useEffect } from "react";
import CocktailTile from "../components/CocktailTile";

function Parent(props) {
    const { markAsFav } = props;

    const [cocktails, setCocktails] = useState([]);

    const ingredientString = "";

    useEffect(() => {
        fetch(
            "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
        )
            .then((response) => response.json())
            .then((data) => setCocktails(data.drinks));
    }, []);

    // console.log("list from parent :", cocktails);

    // for (let i = 0; i < cocktails.strIngredient.length; i++) {
    //     if (cocktails.strIngredient[i] != null) {
    //         ingredientString =
    //             ingredientString + "," + cocktails.strIngredient[i];
    //     }
    //     console.log(ingredientString);
    // }

    var size = Object.keys(cocktails).length;

    console.log("size is :", size);

    if (!cocktails || cocktails.length === 0) {
        return (
            <div>
                <p>No cocktails available.</p>
            </div>
        );
    } else {
        return (
            <div>
                {cocktails.map((item) => (
                    <CocktailTile
                        id={item.idDrink}
                        name={item.strDrink}
                        ing={item.strIngredient1}
                        desc={item.strInstructions}
                        markAsFav={markAsFav}
                        typeOfDisplay="favorite"
                    />
                ))}
            </div>
        );
    }
}

export default Parent;
