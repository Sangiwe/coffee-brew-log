function AddButton({ onClick }) {
  return (
    <button type="button" className="btn btn-primary" onClick={onClick}>
      Add Brew
    </button>
  );
}

export default AddButton;