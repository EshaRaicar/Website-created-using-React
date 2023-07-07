import React, { useState, useRef, useEffect } from "react";

function CustomCreations(props) {
    const [cocktail, setCocktail] = useState({
        cocktailName: "",
        ingredients: "",
        instructions: "",
    });

    const { saveCustomCocktail } = props;

    // {
    //     "cocktailName": "test name",
    //     "ingrediants": "test ing",
    //     "instructions": "test instr"
    // }

    // function handleNameChange(e) {
    //     setCocktail({
    //         ...cocktail,
    //         cocktailName: e.target.value,
    //     });
    // }

    // function handleIngChange(e) {
    //     setCocktail({
    //         ...cocktail,
    //         ingredients: e.target.value,
    //     });
    // }

    // function handleMethodChange(e) {
    //     setCocktail({
    //         ...cocktail,
    //         instructions: e.target.value,
    //     });
    // }

    function handleChange(e) {
        setCocktail({
            ...cocktail,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(cocktail);
        saveCustomCocktail(cocktail);
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">
                    create your own cocktail recipe
                </label>
            </h2>
            <h3>Name</h3>
            <input
                type="text"
                id="cocktailName"
                className="input input__lg"
                name="cocktailName"
                autoComplete="off"
                value={cocktail.cocktailName}
                onChange={handleChange}
            />

            <br></br>
            <h3>Ingredients</h3>
            <input
                type="text"
                id="ingredients"
                className="input input__lg"
                name="ingredients"
                autoComplete="off"
                value={cocktail.ingredients}
                onChange={handleChange}
            />

            <br></br>
            <h3>Method</h3>
            <input
                type="text"
                id="instructions"
                className="input input__lg"
                name="instructions"
                autoComplete="off"
                value={cocktail.instructions}
                onChange={handleChange}
            />
            <br></br>
            <button type="submit" className="btn btn__primary btn__lg">
                Save
            </button>
        </form>
    );
}

export default CustomCreations;
