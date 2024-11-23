import React from 'react';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-10 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
      <div className="max-w-md text-center md:text-left">
        <h1 className="text-5xl font-bold mb-4 text-blue-900">Coffee Blend</h1>
        <div className="flex justify-center md:justify-start mb-4">
          <span className="bg-yellow-200 text-yellow-800 py-1 px-3 rounded-md mr-2">2019-2020 Countrywide CAFE OF THE YEAR</span>
        </div>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, quae placeat. 
          Corrupti, omnis id a consequatur eius saepe quia dignissimos.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <button className="bg-yellow-600 text-white py-2 px-6 rounded-md shadow-md hover:bg-yellow-700 transition duration-300">Download App</button>
          <button className="bg-white text-yellow-600 py-2 px-6 rounded-md border border-yellow-600 shadow-md hover:bg-yellow-100 transition duration-300">Shop Coffee</button>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
