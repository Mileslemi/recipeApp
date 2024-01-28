import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Search from "./components/Search";
import MealsList from "./components/MealsList";

function App() {
  const [meals, setMeals] = useState([]);

  return (
    <div className="App">
      <Header />
      <Search setMeals={setMeals} />
      <MealsList meals={meals} />
    </div>
  );
}

export default App;
