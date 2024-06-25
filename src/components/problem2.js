import React from 'react';

const Problem2 = () => {
  return (
    <div className="container mx-auto py-8 animate-fadeIn bg-white shadow-lg rounded-lg p-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">Problem Description</h1>
      
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4 text-blue-700">Data Description</h2>
        <ul className="list-disc list-inside mb-6 text-lg leading-relaxed text-gray-700">
          <li><strong>Dataset Information:</strong> Location: United States, Period: January 2014 - June 2014, Sample Size: 3018 children, Collection Method: Phone interviews by NORC, University of Chicago.</li>
        </ul>
      </div>
      
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4 text-blue-700">ADHD Statistics</h2>
        <ul className="list-disc list-inside mb-6 text-lg leading-relaxed text-gray-700">
          <li><strong>Total Diagnosed:</strong> 6 million children (ages 3-17)</li>
          <li><strong>Ages 3-5:</strong> 265,000 (2%)</li>
          <li><strong>Ages 6-11:</strong> 2.4 million (10%)</li>
          <li><strong>Ages 12-17:</strong> 3.3 million (13%)</li>
          <li><strong>Gender Disparity:</strong> Boys (13%) are more likely than girls (6%) to be diagnosed.</li>
        </ul>
      </div>
      
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4 text-blue-700">Factors Affecting ADHD</h2>
        <ul className="list-disc list-inside mb-6 text-lg leading-relaxed text-gray-700">
          <li><strong>Genetics:</strong> ADHD often runs in families.</li>
          <li><strong>Prenatal Factors:</strong> Smoking during pregnancy increases the risk.</li>
          <li><strong>Gender:</strong> Boys are more frequently diagnosed than girls, possibly due to differences in symptom manifestation and referral biases.</li>
        </ul>
      </div>
      
      <p className="mb-6 text-lg leading-relaxed text-gray-700">
        In this section, we describe the problem in detail. A thorough description helps in understanding the context and the various factors contributing to the problem. It also aids in identifying potential solutions.
      </p>
      
      <p className="mb-6 text-lg leading-relaxed text-gray-700">
        The problem description includes:
      </p>
      
      <ul className="list-disc list-inside mb-6 text-lg leading-relaxed text-gray-700">
        <li>A comprehensive overview of the current situation.</li>
        <li>An analysis of the factors contributing to the problem.</li>
        <li>Insights from previous attempts to solve the problem.</li>
      </ul>
      
      <p className="mb-6 text-lg leading-relaxed text-gray-700">
        By detailing the problem, we can better understand its complexities and develop more targeted and effective solutions.
      </p>
    </div>
  );
};

export default Problem2;
