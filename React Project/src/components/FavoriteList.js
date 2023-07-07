import React, { useState, useRef, useEffect } from "react";
import CocktailTile from "./CocktailTile";

function FavoriteList(props) {
    return (
        <div>
            {props.favorites.map((item) => (
                <CocktailTile
                    id={item.id}
                    name={item.name}
                    desc={item.desc}
                    ing={item.ing}
                    typeOfDisplay="unfavorite"
                />
            ))}
        </div>
    );
}

export default FavoriteList;
