import { useEffect, useState } from "react";
import Header from "./components/Header";
import AddButton from "./components/AddButton";
import FilterDropdown from "./components/FilterDropdown";
import BrewList from "./components/BrewList";
import { getBrews } from "./services/api";

function App() {
  const [brews, setBrews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadBrews = async () => {
      try {
        const data = await getBrews();
        setBrews(data);
      } catch (requestError) {
        console.error("Failed to load brews:", requestError);
        setError("Unable to load brews. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    loadBrews();
  }, []);

  return (
    <div className="container py-5">
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3 mb-4">
        <Header brewCount={brews.length} />
        <AddButton />
      </div>

      <div className="mb-4">
        <FilterDropdown />
      </div>

      {isLoading && <p className="text-muted">Loading brews...</p>}

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      {!isLoading && !error && <BrewList brews={brews} />}
    </div>
  );
}

export default App;