import Header from "./components/Header";
import AddButton from "./components/AddButton";
import FilterDropdown from "./components/FilterDropdown";
import BrewList from "./components/BrewList";

function App() {
  return (
    <div className="container mt-5">

      <Header />

      <div className="my-4">
        <AddButton />
      </div>

      <div className="mb-4">
        <FilterDropdown />
      </div>

      <BrewList />

    </div>
  );
}

export default App;