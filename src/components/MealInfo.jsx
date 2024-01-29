import React, { useState, useEffect } from "react";
import "../App.css";
import styles from "./mealinfo.module.css";

const URL = "https://api.spoonacular.com/recipes/";
const API_KEY = "f5b5e0203b2c487abb2595afb263f327";

const MealInfo = ({ id }) => {
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchRecipe() {
      const response = await fetch(URL + id + "/information?apiKey=" + API_KEY);
      const data = await response.json();
      console.log(data);
      setInfo(data);
      setLoading(false);
    }
    fetchRecipe();
  }, [id]);
  return (
    <div className="innerContainer" style={{ flex: 2 }}>
      <div className={styles.topContainer}>
        <div>
          <h2>{info.title}</h2>
          <img className={styles.mainImage} src={info.image} />
        </div>
        <div className={styles.recipeDetails}>
          <span>⌚ {info.readyInMinutes} Minutes</span>
          <span>
            <strong>🤼 Serves {info.servings}</strong>
          </span>
          <span>{info.vegetarian ? "🥒 Vegetarian" : "🥩 Non-Vegetarian"}</span>
          <span>{info.vegan ? "🐮 Vegan" : ""}</span>
        </div>
        <div>$ {info.pricePerServing / 100} Price per serving</div>
        <div className={styles.ingredientsContainer}>
          <h3>Ingredients</h3>
          {!loading && (
            <>
              {info.extendedIngredients.map((ingredient) => (
                <div key={ingredient.id} className={styles.ingredient}>
                  <img
                    className={styles.ingredientImage}
                    src={
                      "https://spoonacular.com/cdn/ingredients_100x100/" +
                      ingredient.image
                    }
                    alt=""
                  />
                  <div className={styles.ingredientInfo}>
                    {ingredient.name}{" "}
                    <span>
                      {ingredient.amount} {ingredient.unit}
                    </span>{" "}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
        <div className={styles.instructionsContainer}>
          <h3>Instructions</h3>
          {loading ? (
            <p>Loading.....</p>
          ) : (
            <ol>
              {info.analyzedInstructions[0].steps.map((step) => (
                <li key={step.number}>{step.step}</li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </div>
  );
};

export default MealInfo;
