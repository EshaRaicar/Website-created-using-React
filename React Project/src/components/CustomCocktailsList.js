import React from "react";
import CocktailTile from "./CocktailTile";

function CustomCocktailsList(props) {
    return (
        <div>
            {props.custCocktail.map((item) => (
                <CocktailTile
                    id={item.cocktailName}
                    name={item.ingredients}
                    desc={item.instructions}
                    typeOfDisplay="unfavorite"
                />
            ))}
        </div>
    );
}

export default CustomCocktailsList;
