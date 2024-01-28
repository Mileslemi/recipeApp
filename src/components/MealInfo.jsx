import React from "react";
import "../App.css";
import styles from "./mealinfo.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "f5b5e0203b2c487abb2595afb263f327";

const MealInfo = ({ id }) => {
  return <div className="innerContainer">{id}</div>;
};

export default MealInfo;
