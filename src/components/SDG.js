import React from 'react';
const sdgImageUrl = 'https://cdn.i.haymarketmedia.asia/?n=campaign-asia%2fcontent%2fcost+of+living.jpg&h=570&w=855&q=100&v=20170226&c=1';

const SDG = () => {
  return (
    <div className="sdg p-4 text-center animate-fadeIn">
      <div className="relative w-full h-96 flex items-center justify-center text-white">
        <img
          src={sdgImageUrl}
          alt="SDG"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-blue-600 opacity-60"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 ">
          <h1 className="text-6xl font-bold tracking-tight leading-none mb-4 text-left">
            Sustainable<br />Development<br />Goals
          </h1>
          <p className="text-xl max-w-3xl text-center">
            The Sustainable Development Goals (SDGs) are a universal call to action to end poverty, protect the planet, and ensure that all people enjoy peace and prosperity by 2030.
          </p>
        </div>
      </div>
      <div className="container mx-auto py-10 text-left">
        <h1 className="text-4xl font-bold mb-6">Sustainable Development Goals (SDGs)</h1>

        <h2 className="text-3xl font-semibold mb-4">Overview of SDGs</h2>
        <p className="text-xl mb-6">
          The Sustainable Development Goals (SDGs) are a universal call to action to end poverty, protect the planet, and ensure that all people enjoy peace and prosperity by 2030.
        </p>

        <h2 className="text-3xl font-semibold mb-4">SDG 3: Good Health and Well-being</h2>
        <p className="text-xl mb-4">
          <strong>Objective:</strong> Ensure healthy lives and promote well-being for all at all ages.
        </p>
        <p className="text-xl mb-4">
          <strong>Relevance to ADHD:</strong> Early diagnosis and appropriate treatment of ADHD contribute to better health outcomes. Managing ADHD effectively can improve the quality of life and well-being of affected individuals. Importance of awareness and education about ADHD to reduce stigma and promote mental health.
        </p>
        <p className="text-xl mb-4">
          ADHD affects millions of children and adults worldwide. Proper healthcare and management strategies can significantly enhance the lives of those with ADHD. Advocacy for inclusive health policies and access to treatment for ADHD.
        </p>

        <h2 className="text-3xl font-semibold mb-4">SDG 4: Quality Education</h2>
        <p className="text-xl mb-4">
          <strong>Objective:</strong> Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.
        </p>
        <p className="text-xl mb-4">
          <strong>Relevance to ADHD:</strong> Children with ADHD often face challenges in educational settings. Importance of providing support and resources for children with ADHD to succeed academically. Need for teacher training and inclusive education practices to accommodate children with ADHD.
        </p>
        <p className="text-xl mb-4">
          ADHD symptoms can impact academic performance, particularly in areas requiring sustained attention and organization. Schools should implement strategies to support ADHD students, such as individualized education plans (IEPs) and accommodations. Highlight successful programs and policies that support ADHD students in educational environments.
        </p>

        <h2 className="text-3xl font-semibold mb-4">SDG 10: Reduced Inequalities</h2>
        <p className="text-xl mb-4">
          <strong>Objective:</strong> Reduce inequality within and among countries.
        </p>
        <p className="text-xl mb-4">
          <strong>Relevance to ADHD:</strong> Address disparities in ADHD diagnosis and treatment based on socioeconomic status, race, and geographic location. Ensure that all individuals, regardless of background, have access to ADHD resources and support.
        </p>
        <p className="text-xl mb-4">
          Analysis of how income levels affect access to ADHD diagnosis and treatment. Highlight the need for equitable healthcare policies to ensure that ADHD treatment is accessible to all, including underserved populations. Promote awareness campaigns to reduce stigma and increase understanding of ADHD across diverse communities.
        </p>

        <h2 className="text-3xl font-semibold mb-4">SDG 11: Sustainable Cities and Communities</h2>
        <p className="text-xl mb-4">
          <strong>Objective:</strong> Make cities and human settlements inclusive, safe, resilient, and sustainable.
        </p>
        <p className="text-xl mb-4">
          <strong>Relevance to ADHD:</strong> Creating urban environments that support mental health and well-being. Ensuring that community resources, such as healthcare and educational services, are inclusive and accessible to individuals with ADHD.
        </p>
        <p className="text-xl mb-4">
          Urban areas often have more resources for ADHD diagnosis and treatment, but accessibility can still be an issue. Promote the development of inclusive community programs and support networks for individuals with ADHD. Encourage urban planning that considers the needs of people with ADHD, including access to healthcare and educational facilities.
        </p>

        <h2 className="text-3xl font-semibold mb-4">Conclusion</h2>
        <p className="text-xl mb-4">
          Achieving the SDGs requires a comprehensive approach that includes addressing mental health and learning disorders like ADHD. Support policies and programs that promote inclusive health and education, reduce inequalities, and create sustainable communities for individuals with ADHD.
        </p>
      </div>
    </div>
  );
};

export default SDG;
