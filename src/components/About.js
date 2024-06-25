import React from 'react';
import 'animate.css/animate.min.css';

const About = () => {
  return (
    <div className="about p-4 text-center animate__animated animate__fadeIn">
      <h2 className="text-6xl text-gray-800 font-bold mb-4 tracking-widest">
        About <span className='font-bold text-red-500'>A</span>
        <span className='font-bold text-yellow-500'>D</span>
        <span className='font-bold text-blue-500'>H</span>
        <span className='font-bold text-green-500'>D</span>
        </h2>
      

      <div className="text-left">
        <h2 className="text-4xl text-gray-800 font-bold mb-4">About ADHD</h2>
        <div className="bg-gray-100 rounded-lg p-6 shadow-md text-2xl">
          <p className="mb-4"><strong>Introduction:</strong></p>
          <p className="mb-4">ADHD symptoms: Inattention, Hyperactivity, Impulsivity, Disorganization, Forgetfulness.</p>
          <p className="mb-4">Medication and behavioral therapies are common treatments.</p>

          <p className="mb-4"><strong>Tourette Syndrome (TS):</strong></p>
          <p className="mb-4">TS is a genetic neurological disorder causing involuntary tics.</p>
          <p className="mb-4">Often overlaps with ADHD, with about half of TS children also having ADHD.</p>
        </div>
      </div>

      <div className="mt-8 text-left">
        <h2 className="text-4xl text-gray-800 font-bold mb-4">Data Description</h2>
        <div className="bg-gray-100 rounded-lg p-6 shadow-md text-3xl">
          <p className="mb-4"><strong>Dataset Information:</strong></p>
          <ul className="list-disc pl-8 mb-4">
            <li>Location: United States</li>
            <li>Period: Jan 2014 - Jun 2014</li>
            <li>Sample Size: 3018 children</li>
            <li>Collection Method: Phone interviews by NORC University of Chicago</li>
          </ul>

          <p className="mb-4"><strong>ADHD Statistics:</strong></p>
          <ul className="list-disc pl-8 mb-4">
            <li>Total Diagnosed: 6 million children (ages 3-17)</li>
            <li>Ages 3-5: 265,000 (2%)</li>
            <li>Ages 6-11: 2.4 million (10%)</li>
            <li>Ages 12-17: 3.3 million (13%)</li>
            <li>Boys (13%) are more likely than girls (6%).</li>
          </ul>

          <p className="mb-4"><strong>Factors Affecting ADHD:</strong></p>
          <ul className="list-disc pl-8 mb-4">
            <li>Genetics, Smoking During Pregnancy</li>
          </ul>

          <p className="mb-4"><strong>Recognizing ADHD in children:</strong></p>
          <ul className="list-disc pl-8">
            <li>Difficulty paying attention, easily distracted, careless mistakes.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
