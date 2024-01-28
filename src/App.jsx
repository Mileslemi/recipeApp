import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Search from "./components/Search";
import MealsList from "./components/MealsList";
import MealInfo from "./components/MealInfo";

function App() {
  const [meals, setMeals] = useState([]);
  const [id, fetchMealInfo] = useState(654959);

  return (
    <div className="App">
      <Header />
      <Search setMeals={setMeals} />
      <div className="parentContainer">
        <MealsList meals={meals} fetchMealInfo={fetchMealInfo} />
        <MealInfo id={id} />
      </div>
    </div>
  );
}

export default App;
