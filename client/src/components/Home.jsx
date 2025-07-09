// // src/components/HomePage.js
// import React, { useState, useEffect } from 'react';
// import './Home.css';  // keep using the CSS we wrote

// const images = [
//   '/images/museum1.jpg',
//   '/images/museum2.jpg',
//   '/images/museum3.jpg',
//   '/images/museum4.jpg',
// ];

// const HomePage = () => {
//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="home-container">
//       {/* About Section */}
//       <section className="about-section">
//         <h1>Welcome to Our Museum</h1>
//         <p>
//         Welcome to our museum, where history comes alive! 
//                     Explore a rich collection of ancient artifacts, modern art, and immersive exhibits 
//                     that take you through centuries of human achievement and culture.
//                     Whether you're an art lover, a history enthusiast, or simply curious, 
//                     our museum promises a memorable journey for visitors of all ages.


//           Discover the wonders of history, art, and science all under one roof!
//           Our museum offers a journey through time with exhibits from ancient civilizations,
//           groundbreaking discoveries, and breathtaking art pieces. Explore, learn, and be inspired.
//         </p>
//       </section>

      
//       <div className="slideshow-container">
//         <img src={images[currentImage]} alt="Museum Exhibit" className="slideshow-image" />
//       </div>
//     </div>
//   );
// };

// export default HomePage;


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './Home.css';

// const Home = () => {
//   const images = [
//     '/images/img1.jpg',
//     '/images/img2.jpg',
//     '/images/img3.jpg',
//     '/images/img4.jpg'
//   ];

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="home-container">
//       {/* Hero Section */}
//       <section className="hero">
//         <h1>Welcome to the Grand Museum</h1>
//         <p>Discover History. Experience Culture. Inspire the Future.</p>
//         <Link to="/book" className="book-button">Book Tickets</Link>
//       </section>

//       {/* About Section */}
//       <section className="about">
//         <h2>About the Museum</h2>
//         <p>
//           Our museum preserves and presents artifacts from civilizations around the world.
//           With over 5,000 years of history, we offer visitors a breathtaking journey through time.
//           Join us to explore stunning exhibitions, immersive tours, and engaging educational programs.
//         </p>
//       </section>

//       {/* Slideshow Section */}
//       <section className="slideshow">
//         <img src={images[currentImageIndex]} alt="Museum Slideshow" className="slide-image" />
//       </section>

//       {/* Features Section */}
//       <section className="features">
//         <div className="feature-card">
//           <h3>Ancient Artifacts</h3>
//           <p>Explore relics and treasures from the earliest civilizations.</p>
//         </div>
//         <div className="feature-card">
//           <h3>Interactive Exhibits</h3>
//           <p>Experience the past with hands-on learning and virtual reality tours.</p>
//         </div>
//         <div className="feature-card">
//           <h3>Special Events</h3>
//           <p>Attend workshops, lectures, and seasonal exhibitions throughout the year.</p>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="footer">
//         <p>📍 123 Museum Ave, City, Country</p>
//         <p>📞 Contact us: +123 456 7890 | ✉️ info@grandmuseum.com</p>
//         <p>© 2025 Grand Museum. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Home;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const images = [
    '/images/museum1.jpg',
    '/images/museum2.jpg',
    '/images/museum3.jpg',
    '/images/museum4.jpg',
    '/images/museum5.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // auto-slide every 3s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to the Grand Museum</h1>
        <p>Discover History. Experience Culture. Inspire the Future.</p>
        <Link to="/book" className="book-button">Book Tickets</Link>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About the Museum</h2>
        <p>
          Our museum preserves and presents artifacts from civilizations around the world.
          With over 5,000 years of history, we offer visitors a breathtaking journey through time.
          Join us to explore stunning exhibitions, immersive tours, and engaging educational programs.
        </p>
      </section>

      {/* Slideshow (merged ImageSlider) */}
      <section className="slideshow">
        <div className="slider">
          <button className="prev" onClick={prevSlide}>❮</button>
          <img src={images[currentIndex]} alt="Museum Slideshow" className="slide-image" />
          <button className="next" onClick={nextSlide}>❯</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <h3>Ancient Artifacts</h3>
          <p>Explore relics and treasures from the earliest civilizations.</p>
        </div>
        <div className="feature-card">
          <h3>Interactive Exhibits</h3>
          <p>Experience the past with hands-on learning and virtual reality tours.</p>
        </div>
        <div className="feature-card">
          <h3>Special Events</h3>
          <p>Attend workshops, lectures, and seasonal exhibitions throughout the year.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>📍 123 Museum Ave, City, Country</p>
        <p>📞 Contact us: +123 456 7890 | ✉️ info@grandmuseum.com</p>
        <p>© 2025 Grand Museum. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
