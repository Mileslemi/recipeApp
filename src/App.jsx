import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Search from "./components/Search";
import MealsList from "./components/MealsList";
import MealInfo from "./components/MealInfo";

function App() {
  const [meals, setMeals] = useState([]);

  return (
    <div className="App">
      <Header />
      <Search setMeals={setMeals} />
      <div className="parentContainer">
        <MealsList meals={meals} />
        <MealInfo />
      </div>
    </div>
  );
}

export default App;
