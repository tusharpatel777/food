import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import FoodList from '../components/FoodList';
import FoodDetail from '../components/FoodDetail';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [foods, setFoods] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);

//   const fetchFoods = async () => {
//     const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`);
//     const data = await response.json();
//     setFoods(data.meals || []);
//   };
const fetchFoods = async () => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`);
      const data = await response.json();
      console.log(data); // Add this line to log the response
      setFoods(data.meals || []);
    } catch (error) {
      console.error("Error fetching the data", error);
    }
  };

  return (
    <div className='bg-orange-400 min-h-[100vh] h-[100%] w-screen'>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} onSearch={fetchFoods} />
      {selectedFood ? (
        <FoodDetail food={selectedFood} />
      ) : (
        <FoodList foods={foods} />
      )}
    </div>
  );
};

export default Home;
