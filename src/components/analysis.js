import React from 'react';
import states from '../images/adhd states cat.png';
// import statesdis from '../images/adhd distribution od sates.jpg';
import dendo from '../images/adhd medication symtom dendrogram.jpeg';
import medication from '../images/adhd symtom medication gender.jpeg';
import severity from '../images/ADHD severity.png';
import symptoms from '../images/ADHD symptoms analysis.jpeg';
import donut from '../images/Donut Chart of ADHD Based on states Final- Presentation.png';
import performance from '../images/performance cgart adhd.jpg';
import gender from '../images/gender graph.jpg';
import frequency from '../images/Frequency of adhd age groups.png';
import poverty from '../images/Distribution of poverty.png';

// import descriptiveStatisticsImage from './images/descriptive-statistics.png';
// import correlationAnalysisImage from './images/correlation-analysis.png';
// import hypothesisTestingImage from './images/hypothesis-testing.png';
// import dataVisualizationImage from './images/data-visualization.png';

const Analysis = () => {
  return (
    <div className="container mx-auto py-8 animate-fadeIn bg-white shadow-lg rounded-lg">
      <div className="relative">
        <img src="https://www.callcentrehelper.com/images/stories/2020/10/data-analysis-charts-760.png" alt="Data Analysis Banner" className="w-full h-64 object-cover opacity-80" />
        <div className="absolute inset-0 bg-blue-600 opacity-80 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Data Analysis</h1>
            <p className="text-lg leading-relaxed">
              Data analysis involves inspecting, cleansing, transforming, and modeling data with the goal of discovering useful information, informing conclusions, and supporting decision-making.
            </p>
          </div>
        </div>
      </div>
      <div className="p-8">
        <p className="mb-6 text-lg leading-relaxed text-gray-700">
          In our project, we applied several data analysis techniques to uncover patterns and insights from the dataset. Below, we outline the key steps we took:
        </p>
      
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">Basic Analysis</h2>
      
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2 text-indigo-600">1. Is ADHD related to sex?</h3>
          <ul className="list-disc list-inside mb-6 text-lg leading-relaxed text-gray-700">
            <li>ADHD affects both males and females</li>  
            <li>From the given dataset the number of <span className='font-bold'>male counts =2097 and female counts=869</span></li>
            <li> But research suggests an increased prevalence in males</li>
          </ul>
          <img src={gender} alt="Exploratory Data Analysis" className="mb-6 rounded-lg shadow-md w-1/2 h-2/6" />
        </div>
      
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2 text-indigo-600">2. Frequency of age groups</h3>
          <ul className="list-disc list-inside mb-6 text-lg leading-relaxed text-gray-700">
            <li>ADHD diagnoses show an increasing trend as children grow up</li>  
            <li>The age group of 16 to 17-year-olds has the highest frequency among children  </li>
            <li>Therefore As academic and social demands increase, symptoms of inattention become more prominent <br></br>and begin to interfere with academic performance and peer relationships</li>
          </ul>
          <img src={frequency} alt="Exploratory Data Analysis" className="mb-6 rounded-lg shadow-md w-1/2 h-2/6" />
        </div>
      
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2 text-indigo-600">3. Performance of Students</h3>
          <ul className="list-disc list-inside mb-6 text-lg leading-relaxed text-gray-700">
            <li>Performance in writing has a significant number of low ratings compared to reading and overall school performance. </li>  
            <li>Performance in reading is generally better rated than writing and overall school performance. </li>
            <li>Rating 3 is the most common rating across all attributes, indicating that most students are rated average in these areas</li>
          </ul>
          <img src={performance} alt="Exploratory Data Analysis" className="mb-6 rounded-lg shadow-md w-1/2 h-2/6" />
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2 text-indigo-600">4.ADHD Severity</h3>
          
          <img src={severity} alt="Data Visualization" className="mb-6 rounded-lg shadow-md w-1/2 h-2/6" />

          <ul className="list-disc list-inside mb-6 text-lg leading-relaxed text-gray-700">
            <li><span className='font-bold'>Most Common Severity Levels: </span>Ratings of 2.0 and 1.0 are the most prevalent, accounting for a combined 82.6% of cases. <br></br>This indicates that most individuals have mild to moderate ADHD symptoms.</li>  
            <li><span className='font-bold'>Less Common but Notable Severity: </span> : A smaller portion of individuals (16.7%) have a severity rating of 3.0, indicating more severe symptoms.</li>
          </ul>
        </div>
      
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">Geographical Statistics</h2>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2 text-indigo-600"> Categorizing States</h3>
          <p className="mb-4 text-lg leading-relaxed text-gray-700">
           We divided The states (US) into 3 categories (Urban,Seni-urban,Rural) based on these factors :
          </p>
          <ul className="list-disc list-inside mb-6 text-lg leading-relaxed text-gray-700">
            <li>Population </li>  
            <li>Infrastructure </li>
            <li>Quality of Services</li>
          </ul>
          <img src={states} alt="Hypothesis Testing" className="mb-6 rounded-lg shadow-md w-1/2 h-2/6" />
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2 text-indigo-600"> Distribution of ADHD across states</h3>
          <p className="mb-4 text-lg leading-relaxed text-gray-700">
           Here is the demographs showing how ADHD is distrubuted across the States
          </p>
          
          <img src={donut} alt="Hypothesis Testing" className="mb-6 rounded-lg shadow-md w-1/2 h-2/6" />

          <ul className="list-disc list-inside mb-6 text-lg leading-relaxed text-gray-700">
            <li>According to the data, it is clear that Urban states have more diagnosis </li>  
            <li>The reason might be because they have more facilities for diagnosis, therefore they are likely to be diagnosed than the rural areas.</li>
          </ul>
        </div>

        <h2 className="text-3xl font-semibold mb-4 text-gray-700">Financial demographs</h2>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2 text-indigo-600">Is ADHD related to Financial income</h3>
          
          <img src={poverty} alt="Data Visualization" className="mb-6 rounded-lg shadow-md w-1/2 h-2/6" />

          <ul className="list-disc list-inside mb-6 text-lg leading-relaxed text-gray-700">
            <li><span className='font-bold'>Middle and higher-income households</span> have better access to healthcare and private insurance, leading to more frequent and earlier ADHD diagnoses.</li>  
            <li><span className='font-bold'>Lower-income households</span> may have limited healthcare access, resulting in underdiagnosis or late diagnosis of ADHD</li>
          </ul>
        </div>

        <h2 className="text-3xl font-semibold mb-4 text-gray-700">Symptoms </h2>
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2 text-indigo-600">Symptoms of ADHD</h3>
          
          <img src={symptoms} alt="Data Visualization" className="mb-6 rounded-lg shadow-md w-1/2 h-2/6" />

          <ul className="list-disc list-inside mb-6 text-lg leading-relaxed text-gray-700">
            <li><span className='font-bold'>Common Symptoms :</span> The symptoms with the highest mode ratings indicate that inattention-related symptoms are most prevalent.<br></br> These include difficulty paying attention to details, difficullty organising the tasks and avoiding tasks that require sustained mental effort. </li>  
            <li><span className='font-bold'>Moderate Frequency Symptoms:</span> Symptoms such as not listening, not following through on instructions, and being forgetful are moderately frequent.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2 text-indigo-600">Symptoms of ADHD Medication</h3>
          
          <img src={medication} alt="Data Visualization" className="mb-6 rounded-lg shadow-md w-1/2 h-2/6" />
          <img src={dendo} alt="Data Visualization" className="mb-6 rounded-lg shadow-md w-1/2 h-2/6" />

          <ul className="list-disc list-inside mb-6 text-lg leading-relaxed text-gray-700">
            <li>By the Dendogram, we can see that the symptoms: appetite changes, dizziness, suicidal thoughts, allergic reaction, constipation are more likely to occur together</li>  
            <p className="text-lg leading-relaxed text-gray-700">
            Based on the provided chart, the two most common symptoms overall, regardless of gender, are :
            </p>
            <li><span className='font-bold'>1. Insomnia</span></li>
            <li><span className='font-bold'>2. Mood swings</span></li>
          </ul>
        </div>

        <p className="text-lg leading-relaxed text-gray-700">
        In summary, early diagnosis, tailored treatment, and increased awareness are essential to support individuals with ADHD.<br></br> Our analysis highlights the need for equitable healthcare access and continuous support for affected families
        </p>
      </div>
    </div>
  );
};

export default Analysis;
