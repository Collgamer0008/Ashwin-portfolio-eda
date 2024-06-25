import React from 'react';
import { useParams } from 'react-router-dom';

const EDA = () => {
  const { id } = useParams();
  return (
    <div className="eda p-4 text-center animate-fadeIn">
      <h2 className="text-4xl text-gray-800 font-bold mb-2">EDA {id}</h2>
      <p className="text-lg text-gray-600">This is the EDA {id} section.</p>
    </div>
  );
};

export default EDA;
