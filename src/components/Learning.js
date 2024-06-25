import React from 'react';

const Learning = () => {
  return (
    <div className="learning relative p-6 text-center animate-fadeIn bg-white rounded-lg shadow-md">
      <div className="relative">
        <img 
          src="https://www.aihr.com/wp-content/uploads/learning-vs-training-cover.png" 
          alt="Learning Background" 
          className="w-full h-64 object-cover opacity-90 rounded-lg"
        />
        <div className="absolute inset-0 bg-blue-500 opacity-50 rounded-lg"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h2 className="text-5xl font-bold mb-2">Learning and Reflections</h2>
          <p className="text-lg">This is what we learnt :-</p>
        </div>
      </div>

      <div className="mt-8 text-xl">
        <h3 className="text-4xl text-gray-700 font-semibold mb-2">What We Learned About the Project</h3>
        <ul className="list-disc list-inside text-left text-gray-600 mb-6 leading-10">
          <li><strong>Impact and Significance of ADHD:</strong> ADHD significantly affects academic performance, social interactions, and overall quality of life. Early diagnosis and treatment are crucial for better long-term outcomes.</li>
          <li><strong>Geographical Distribution:</strong> ADHD diagnosis rates vary by state, with higher rates in urban areas due to better access to healthcare.</li>
          <li><strong>Symptoms and Treatment:</strong> Inattention is the most common symptom of ADHD, with most cases being mild to moderate. Treatment options include medication, behavioral therapy, and lifestyle changes.</li>
        </ul>
      </div>

      <div className="mb-8 text-xl">
        <h3 className="text-4xl text-gray-700 font-semibold mb-2">The Abilities I've Sharpened</h3>
        <ul className="list-disc list-inside text-left text-gray-600 mb-6 leading-10">
          <li><strong>Teamwork and Collaboration:</strong> Effective communication and leveraging each team member's strengths were crucial for our success.</li>
          <li><strong>Data Analysis Techniques:</strong> We improved our skills in data preprocessing and analysis, handling missing values, and performing statistical analysis.</li>
          <li><strong>Presentation Skills:</strong> Creating comprehensive presentations helped us convey complex information clearly and effectively through data visualization.</li>
        </ul>
      </div>

      <div className='text-xl '>
        <h3 className="text-4xl text-gray-700 font-semibold mb-2">Mistakes and Reflections</h3>
        <ul className="list-disc list-inside text-left text-gray-600 leading-10">
          <li><strong>Initial Planning:</strong> Our initial planning lacked detail, leading to confusion and delays. We'll create more detailed project plans in the future.</li>
          <li><strong>Data Cleaning:</strong> We encountered issues with data cleaning, such as removing too many null values. We'll pay more attention to data cleaning methods to ensure data integrity.</li>
          <li><strong>Time Management:</strong> We underestimated the time required for certain tasks, leading to last-minute rushes. Better time management and setting realistic deadlines will be our focus in future projects.</li>
        </ul>
      </div>
    </div>
  );
};

export default Learning;
