function BrewCard({ brew, onEdit }) {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <div className="d-flex align-items-start gap-3">
          <div
            className="d-flex align-items-center justify-content-center rounded-circle bg-dark text-white fw-bold"
            style={{ width: "48px", height: "48px", flexShrink: 0 }}
          >
            {brew.rating}
          </div>

          <div className="flex-grow-1">
            <h2 className="h5 mb-2">{brew.beans}</h2>

            <div className="d-flex flex-wrap gap-3 text-secondary">
              <span>{brew.method}</span>
              <span>{brew.coffee_grams}g coffee</span>
              <span>{brew.water_grams}g water</span>
            </div>
          </div>

          <button
            type="button"
            className="btn btn-sm btn-outline-secondary"
            onClick={() => onEdit(brew)}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default BrewCard;