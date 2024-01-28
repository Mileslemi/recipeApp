import React, { useEffect, useState } from "react";
import styles from "./form.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "f5b5e0203b2c487abb2595afb263f327";

const Search = ({ setMeals }) => {
  const [meal, searchRecipe] = useState("pasta");

  useEffect(() => {
    async function searchApi() {
      const response = await fetch(
        URL + "?query=" + meal + "&apiKey=" + API_KEY
      );
      const data = await response.json();
      // console.log(data.results);
      setMeals(data.results);
    }
    searchApi();
  }, [meal]);

  return (
    <div className={styles.formContainer}>
      <input
        type="text"
        className={styles.formInput}
        value={meal}
        onChange={(e) => searchRecipe(e.target.value)}
        placeholder="Search Recipe..."
      />
    </div>
  );
};

export default Search;
