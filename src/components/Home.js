import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  {
    src: 'https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: 'Having ADHD'
  },
  {
    src: 'https://images.pexels.com/photos/1449934/pexels-photo-1449934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: 'is okay'
  },
  {
    src: 'https://images.pexels.com/photos/939702/pexels-photo-939702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: 'and fun.'
  }
];

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust the speed (ms)
    pauseOnHover: true,
  };

  return (
    <div className="home p-4 animate-fadeIn">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image.src}
              alt={`Slide ${index + 1}`}
              className="w-full h-[60vh] object-cover rounded-lg opacity-80"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-blue-600 opacity-50 rounded-lg"></div>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <h2 className="text-white text-7xl font-bold z-10">{image.text}</h2>
            </div>
          </div>
        ))}
      </Slider>
      {/* <h2 className="text-center text-5xl text-gray-800 mt-4 font-poppins">Welcome to My Portfolio</h2>
      <p className="text-center text-xl text-gray-600 mt-2">This is a showcase of my work and skills.</p> */}
      <div className="home p-4 animate-fadeIn text-2xl text-center justify-center align-middle">
      <div className="mb-8 text-left">
        <h2 className="text-5xl font-bold mb-2 ">Introduction to ADHD:</h2>
        <ul className="list-disc leading-10">
        <li>ADHD is a brain-based disorder affecting the ability to pay attention and stay still.</li>
        <li>ADHD symptoms vary: inattentive, hyperactive, or a combination.</li>
        <li>No specific medical tests; diagnosis involves observation, history-taking, and questionnaires.</li>
        </ul>
      </div>


      <div className="mb-8 text-left">
        <h2 className="text-5xl font-bold mb-2">Team Information:</h2>
        <p><span className='font-bold'>Team No.</span>: 12</p>
        <p><span className='font-bold'>R. No.</span>: 155</p>
        <p><span className='font-bold'>USN</span>:01FE22BCI060</p>
        <p><span className='font-bold'>Name</span>:Ashwin Kulkarni</p>
      </div>

      

      
    </div>
    </div>
  );
};

export default Home;
