import { useState } from "react";
import BrewForm from "../components/BrewForm";
import { deleteBrew, updateBrew } from "../services/api";

function EditBrew({
  brew,
  onBrewUpdated,
  onBrewDeleted,
  onCancel,
})  {
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [serverError, setServerError] = useState("");

  const handleUpdate = async (formData) => {
    try {
      setIsSaving(true);
      setServerError("");

      const updatedBrew = await updateBrew(brew.id, formData);
      onBrewUpdated(updatedBrew);
    } catch (error) {
      console.error("Failed to update brew:", error);

      if (error.response?.data) {
        setServerError(
          "The brew could not be updated. Check your form values.",
        );
      } else {
        setServerError("Unable to connect to the server.");
      }
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
  const confirmed = window.confirm(
    `Delete the brew made with "${brew.beans}"?`,
  );

  if (!confirmed) {
    return;
  }

  try {
    setIsDeleting(true);
    setServerError("");

    await deleteBrew(brew.id);
    onBrewDeleted(brew.id);
  } catch (error) {
    console.error("Failed to delete brew:", error);
    setServerError("The brew could not be deleted. Please try again.");
  } finally {
    setIsDeleting(false);
  }
};

  return (
    <div className="container py-5">
      <div className="mx-auto" style={{ maxWidth: "700px" }}>
        <h1 className="mb-4">Edit a brew</h1>

        <BrewForm
          initialValues={{
            beans: brew.beans,
            method: brew.method,
            coffee_grams: brew.coffee_grams,
            water_grams: brew.water_grams,
            rating: brew.rating,
            tasting_notes: brew.tasting_notes,
          }}
          onSubmit={handleUpdate}
          onCancel={onCancel}
          onDelete={handleDelete}
          isSaving={isSaving }
          isDeleting={isDeleting}
          serverError={serverError}
          submitLabel="Save"
        />
      </div>
    </div>
  );
}

export default EditBrew;