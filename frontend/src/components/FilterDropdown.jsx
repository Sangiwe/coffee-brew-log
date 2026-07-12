function FilterDropdown({ selectedMethod, onMethodChange }) {
  return (
    <div>
      <label htmlFor="method-filter" className="form-label">
        Filter by method
      </label>

      <select
        id="method-filter"
        className="form-select"
        value={selectedMethod}
        onChange={(event) => onMethodChange(event.target.value)}
      >
        <option value="">All methods</option>
        <option value="Pour Over">Pour Over</option>
        <option value="French Press">French Press</option>
        <option value="Espresso">Espresso</option>
        <option value="Aeropress">Aeropress</option>
      </select>
    </div>
  );
}

export default FilterDropdown;