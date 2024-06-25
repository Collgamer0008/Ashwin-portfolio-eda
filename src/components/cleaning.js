import React from 'react';
import handlingMissingValuesImage from '../images/Null-removed.jpeg';
import removingDuplicatesImage from '../images/duplicates-removed.jpeg';


const Cleaning = () => {
  return (
    <div className="container mx-auto py-8 animate-fadeIn bg-white shadow-lg rounded-lg">
      <div className="relative">
        <img src="https://www.educative.io/v2api/editorpage/4813569110048768/image/4504520929837056" alt="Data Cleaning Banner" className="w-full h-64 object-cover opacity-80" />
        <div className="absolute inset-0 bg-blue-600 opacity-80 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Data Cleaning</h1>
            <p className="text-lg leading-relaxed">
              Data cleaning is an essential part of data analysis. It involves removing or correcting incorrect, corrupted, improperly formatted, duplicate, or incomplete data within a dataset.
            </p>
          </div>
        </div>
      </div>
      <div className="p-8">
        <p className="mb-6 text-lg leading-relaxed">
          In our project, we applied several data preprocessing techniques to ensure the data's accuracy and readiness for analysis. Below, we outline the key steps we took:
        </p>
      
        <h2 className="text-2xl font-semibold mb-4">Data Preprocessing Techniques</h2>
      
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">1. Handling Missing Values</h3>
          <p className="mb-4 text-lg leading-relaxed">
            We removed columns and rows with more than 50% missing values to maintain the dataset's integrity. For the remaining missing values, we used the mode of each column to fill in the gaps.
          </p>
          <img src={handlingMissingValuesImage} alt="Handling Missing Values" className="mb-6 rounded-lg shadow-md w-full" />
        </div>
      
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">2. Replacing Null Values</h3>
          <p className="mb-4 text-lg leading-relaxed">
            Null entries can skew the analysis results. We identified and replaced any Null values after the cleaning with the mode of the column to ensure the dataset is not empty.
          </p>
          <img src={removingDuplicatesImage} alt="Removing Duplicates" className="mb-6 rounded-lg shadow-md w-full" />
        </div>
      
  
        <p className="text-lg leading-relaxed">
          By following these steps, we ensured our data was clean, accurate, and ready for further analysis. Clean data is crucial for deriving meaningful insights and making informed decisions.
        </p>
      </div>
    </div>
  );
};

export default Cleaning;
