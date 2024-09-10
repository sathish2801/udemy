import React from 'react';
import './style.scss'; // Ensure this file contains your modal styles

const Filter = ({ isOpen, onClose, onApply, filterState }) => {
  if (!isOpen) return null;

  const handleApply = () => {
    onApply(filterState);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className={`modal-content ${isOpen ? 'show' : ''}`}>

        <button className="modal-close" onClick={onClose} aria-label="Close">X</button>
        <h2>Filter Options</h2>
        <div className="modal-filters">
          <select 
            onChange={(e) => filterState.setSortOrder(e.target.value)}
            value={filterState.sortOrder}
          >
            <option value="">Sort By</option>
            <option value="priceLowToHigh">Price Low to High</option>
            <option value="priceHighToLow">Price High to Low</option>
          </select>
          <select 
            onChange={(e) => filterState.setSelectedDifficulty(e.target.value)}
            value={filterState.selectedDifficulty}
          >
            <option value="">Difficulty</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
          <select 
            onChange={(e) => filterState.setMinRating(e.target.value)}
            value={filterState.minRating}
          >
            <option value={0}>Rating</option>
            <option value={4}>4 stars and up</option>
            <option value={4.5}>4.5 stars and up</option>
            <option value={5}>5 stars</option>
          </select>
          <button onClick={handleApply}>Apply Filters</button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
