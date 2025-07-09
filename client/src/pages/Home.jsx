// import React from 'react';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import './Home.css'; // We'll create this for custom styles

// const Home = () => {
//   const images = [
//     '/images/museum1.jpg',
//     '/images/museum2.jpg',
//     '/images/museum3.jpg',
//     '/images/museum4.jpg',
//     '/images/museum5.jpg'
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 800,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000
//   };

//   return (
//     <div className="home-container">
//       <Slider {...settings}>
//         {images.map((img, index) => (
//           <div key={index}>
//             <img src={img} alt={`Slide ${index}`} className="slider-image" />
//           </div>
//         ))}
//       </Slider>
//       <div className="home-content">
//         <h1>Welcome to the Museum</h1>
//         <p>Explore history, art, and culture like never before!</p>
//         <a href="#booking-form" className="book-btn">Book Your Visit</a>
//       </div>
//     </div>
//   );
// };

// export default Home;
