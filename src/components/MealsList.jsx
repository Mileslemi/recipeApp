import React from "react";
import MealContainer from "./MealContainer";

const MealsList = ({ meals }) => {
  return (
    <div>
      {meals.map((meal) => (
        <MealContainer key={meal.id} meal={meal} />
      ))}
    </div>
  );
};

export default MealsList;
