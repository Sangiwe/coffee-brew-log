import { useState } from "react";
import Header from "./components/Header";
import AddButton from "./components/AddButton";
import FilterDropdown from "./components/FilterDropdown";
import BrewList from "./components/BrewList";

function App() {
  const [brews] = useState([
    {
      id: 1,
      beans: "Ethiopian Yirgacheffe",
      method: "Pour Over",
      coffee_grams: 18,
      water_grams: 300,
      rating: 5,
    },
    {
      id: 2,
      beans: "Colombian Supremo",
      method: "French Press",
      coffee_grams: 22,
      water_grams: 350,
      rating: 4,
    },
  ]);

  return (
    <div className="container py-5">
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3 mb-4">
        <Header brewCount={brews.length} />
        <AddButton />
      </div>

      <div className="mb-4">
        <FilterDropdown />
      </div>

      <BrewList brews={brews} />
    </div>
  );
}

export default App;