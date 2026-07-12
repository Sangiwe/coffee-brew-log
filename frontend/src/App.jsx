import { useEffect, useState } from "react";
import Header from "./components/Header";
import AddButton from "./components/AddButton";
import FilterDropdown from "./components/FilterDropdown";
import BrewList from "./components/BrewList";
import AddBrew from "./pages/AddBrew";
import { getBrews } from "./services/api";
import EditBrew from "./pages/EditBrew";

function App() {
  const [brews, setBrews] = useState([]);
  const [currentView, setCurrentView] = useState("list");
  const [selectedBrew, setSelectedBrew] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
  const loadBrews = async () => {
    try {
      setIsLoading(true);
      setError("");

      const data = await getBrews(selectedMethod);
      setBrews(data);
    } catch (requestError) {
      console.error("Failed to load brews:", requestError);
      setError("Unable to load brews. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  loadBrews();
}, [selectedMethod]);

  const handleBrewCreated = (newBrew) => {
    setBrews((currentBrews) => [newBrew, ...currentBrews]);
    setCurrentView("list");
  };

  const handleEditClick = (brew) => {
  setSelectedBrew(brew);
  setCurrentView("edit");
};

const handleBrewUpdated = (updatedBrew) => {
  setBrews((currentBrews) =>
    currentBrews.map((brew) =>
      brew.id === updatedBrew.id ? updatedBrew : brew,
    ),
  );

  setSelectedBrew(null);
  setCurrentView("list");
};

const handleBrewDeleted = (deletedBrewId) => {
  setBrews((currentBrews) =>
    currentBrews.filter((brew) => brew.id !== deletedBrewId),
  );

  setSelectedBrew(null);
  setCurrentView("list");
};

  if (currentView === "add") {
    return (
      <AddBrew
        onBrewCreated={handleBrewCreated}
        onCancel={() => setCurrentView("list")}
      />
    );
  }

  if (currentView === "edit" && selectedBrew) {
  return (
    <EditBrew
      brew={selectedBrew}
      onBrewUpdated={handleBrewUpdated}
      onBrewDeleted={handleBrewDeleted}
      onCancel={() => {
        setSelectedBrew(null);
        setCurrentView("list");
      }}
    />
  );
}

  return (
    <div className="container py-5">
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3 mb-4">
        <Header brewCount={brews.length} />
        <AddButton onClick={() => setCurrentView("add")} />
      </div>

      <div className="mb-4">
        <FilterDropdown
          selectedMethod={selectedMethod}
          onMethodChange={setSelectedMethod}
        />
      </div>

      {isLoading && <p className="text-muted">Loading brews...</p>}

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      {!isLoading && !error && <BrewList brews={brews} onEdit={handleEditClick} />}
    </div>
  );
}

export default App;