import React from 'react';

const Navbar = ({ searchQuery, setSearchQuery, onSearch }) => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl">FoodApp</h1>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for food..."
          className="p-2 rounded"
        />
        <button onClick={onSearch} className="bg-blue-500 text-white p-2 rounded ml-2">Search</button>
      </div>
    </nav>
  );
};

export default Navbar;
