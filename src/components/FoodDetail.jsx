import React from 'react';

const FoodDetail = ({ food }) => {
  return (
    <div className="container mx-auto mt-8 bg-white p-4 rounded shadow">
      <button onClick={() => window.history.back()} className="bg-blue-500 text-white p-2 rounded mb-4">Back</button>
      <h2 className="text-2xl font-bold">{food.strMeal}</h2>
      <img src={food.strMealThumb} alt={food.strMeal} className="w-full h-48 object-cover rounded" />
      <p>{food.strInstructions}</p>
      <h3 className="text-xl mt-4">Ingredients:</h3>
      <ul>
        {Object.keys(food).map(key => key.startsWith('strIngredient') && food[key] && (
          <li key={key}>{food[key]}</li>
        ))}
      </ul>
    </div>
  );
};

export default FoodDetail;
