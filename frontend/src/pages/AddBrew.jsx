import { useState } from "react";
import BrewForm from "../components/BrewForm";
import { createBrew } from "../services/api";

function AddBrew({ onBrewCreated, onCancel }) {
  const [isSaving, setIsSaving] = useState(false);
  const [serverError, setServerError] = useState("");

  const handleCreate = async (formData) => {
    try {
      setIsSaving(true);
      setServerError("");

      const newBrew = await createBrew(formData);
      onBrewCreated(newBrew);
    } catch (error) {
      console.error("Failed to create brew:", error);

      if (error.response?.data) {
        setServerError("The brew could not be saved. Check your form values.");
      } else {
        setServerError("Unable to connect to the server.");
      }
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="mx-auto" style={{ maxWidth: "700px" }}>
        <h1 className="mb-4">Add a brew</h1>

        <BrewForm
          onSubmit={handleCreate}
          onCancel={onCancel}
          isSaving={isSaving}
          serverError={serverError}
        />
      </div>
    </div>
  );
}

export default AddBrew;