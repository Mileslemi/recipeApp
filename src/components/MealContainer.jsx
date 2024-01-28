import React from "react";
import styles from "./mealcontainer.module.css";

const MealContainer = ({ meal, fetchMealInfo }) => {
  return (
    <div className={styles.container}>
      <img src={meal.image} />
      <p>{meal.title}</p>
      <div className={styles.btnContainer}>
        <button onClick={() => fetchMealInfo(meal.id)}>View Recipe</button>
      </div>
    </div>
  );
};

export default MealContainer;
