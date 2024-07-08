import React from 'react';

const FoodList = ({ foods, setSelectedFood }) => {
  return (
    <div className="container mx-auto mt-8 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {foods.map((food) => (
          <div
            key={food.idMeal}
            className="bg-white p-4 rounded shadow-lg cursor-pointer transition-transform transform hover:scale-105"
            onClick={() => setSelectedFood(food)}
          >
            <h2 className="text-xl font-bold mb-2">{food.strMeal}</h2>
            <img src={food.strMealThumb} alt={food.strMeal} className="w-full h-48 object-cover rounded mb-2" />
            <p className="text-gray-700">{food.strInstructions.substring(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;
