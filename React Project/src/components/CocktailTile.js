import React from "react";

function CocktailTile(props) {
    console.log("props from Child.js: ", props);

    const { name, ing, desc, markAsFav, id, typeOfDisplay } = props;

    return (
        <div>
            <h2>{name}</h2>
            <h2>{ing}</h2>
            <h3>{desc}</h3>

            {typeOfDisplay === "favorite" && (
                <button
                    onClick={() =>
                        markAsFav({
                            id: id,
                            name: name,
                            ing: ing,
                            desc: desc,
                        })
                    }
                >
                    Mark as Fav
                </button>
            )}

            {typeOfDisplay === "unfavorite" && <button>Unfavorite</button>}
        </div>
    );
}

export default CocktailTile;
