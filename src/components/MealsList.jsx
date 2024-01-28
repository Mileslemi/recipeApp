import React from "react";
import MealContainer from "./MealContainer";
import "../App.css";

const MealsList = ({ meals }) => {
  return (
    <div className="innerContainer">
      {meals.map((meal) => (
        <MealContainer key={meal.id} meal={meal} />
      ))}
    </div>
  );
};

export default MealsList;
