import React from "react";

const MealsList = ({ meals }) => {
  return (
    <div>
      {meals.map((meal) => (
        <li key={meal.id}>{meal.title}</li>
      ))}
    </div>
  );
};

export default MealsList;
