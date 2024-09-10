import React, { useState } from 'react';
import './style.scss';
import Filter from '../Filter'; // Import the Filter component

const Search = ({ onFilter, onTagSelect }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState('All'); // State to track the selected tag
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [minRating, setMinRating] = useState(0);
  const [sortOrder, setSortOrder] = useState('');
  const [searchQuery, setSearchQuery] = useState(''); // State for the search input

  const handleFilterApply = (filters) => {
    onFilter(filters);
  };

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
    onTagSelect(tag); // Callback to update the card data based on the selected tag
  };

  return (
    <div className='search box'>
      <div className='search-content'>
        <div className='search-input-container'>
          <i className="bi bi-search"></i>
          <input 
            type="text" 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)} 
            placeholder="Search..." 
            className='search-input'
          />
        </div>
        <div className='text'>
          <p 
            className={selectedTag === 'All' ? 'active' : ''} 
            onClick={() => handleTagClick('All')}
          >All</p>
          <p 
            className={selectedTag === 'Purchased' ? 'active' : ''} 
            onClick={() => handleTagClick('Purchased')}
          >Purchased</p>
        </div>
        <div className="filter">
          <i className="bi bi-funnel" onClick={() => setIsModalOpen(true)}>Filter</i>
        </div>
      </div>
      <Filter
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onApply={handleFilterApply}
        filterState={{
          selectedDifficulty,
          setSelectedDifficulty,
          minRating,
          setMinRating,
          sortOrder,
          setSortOrder
        }}
      />
    </div>
  );
}

export default Search;
