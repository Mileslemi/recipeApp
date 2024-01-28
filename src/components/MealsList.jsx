import React from "react";
import MealContainer from "./MealContainer";
import "../App.css";

const MealsList = ({ meals, fetchMealInfo }) => {
  return (
    <div className="innerContainer">
      {meals.map((meal) => (
        <MealContainer
          key={meal.id}
          meal={meal}
          fetchMealInfo={fetchMealInfo}
        />
      ))}
    </div>
  );
};

export default MealsList;
