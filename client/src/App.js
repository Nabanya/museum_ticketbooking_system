// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import BookingForm from './components/BookingForm';
// import BookingsList from './components/BookingsList';
// import ChatBot from './components/ChatBot';

// const App = () => {
//     return ( <
//         Router >
//         <
//         nav style = {
//             { padding: '10px', textAlign: 'center', background: '#ddd' } } >
//         <
//         Link to = "/"
//         style = {
//             { margin: '0 10px' } } > Book Ticket < /Link> <
//         Link to = "/bookings"
//         style = {
//             { margin: '0 10px' } } > See Bookings < /Link> <
//         /nav> <
//         Routes >
//         <
//         Route path = "/"
//         element = { < BookingForm / > }
//         /> <
//         Route path = "/bookings"
//         element = { < BookingsList / > }
//         /> <
//         /Routes> <
//         ChatBot / >
//         <
//         /Router>
//     );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BookingForm from './components/BookingForm';
import BookingsList from './components/BookingsList';
import Home from './components/Home'; // NEW IMPORT
import ChatBot from './components/ChatBot';
// import ImageSlider from './components/ImageSlider';

const App = () => {
    return ( <
        Router >
        <
        nav style = {
            { padding: '10px', textAlign: 'center', background: '#ddd' }
        } >
        <
        Link to = "/"
        style = {
            { margin: '0 10px' }
        } > Home < /Link> <
        Link to = "/book"
        style = {
            { margin: '0 10px' }
        } > Book Ticket < /Link> <
        Link to = "/bookings"
        style = {
            { margin: '0 10px' }
        } > See Bookings < /Link>  < /
        nav > <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "/book"
        element = { < BookingForm / > }
        /> <
        Route path = "/bookings"
        element = { < BookingsList / > }
        /> < /
        Routes >

        <
        ChatBot / >
        <
        /Router>
    );
}

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import BookingForm from './components/BookingForm';
// import BookingsList from './components/BookingsList';
// import ChatBot from './components/ChatBot';
// import Home from './components/Home'; // Corrected: import Home, not HomePage

// const App = () => {
//     return ( <
//         Router >
//         <
//         nav style = {
//             { padding: '10px', textAlign: 'center', background: '#ddd' } } >
//         <
//         Link to = "/"
//         style = {
//             { margin: '0 10px' } } > Home < /Link> <
//         Link to = "/book-ticket"
//         style = {
//             { margin: '0 10px' } } > Book Ticket < /Link> <
//         Link to = "/bookings"
//         style = {
//             { margin: '0 10px' } } > See Bookings < /Link> <
//         /nav>

//         <
//         Routes >
//         <
//         Route path = "/"
//         element = { < Home / > }
//         /> {/ * Correct: Home * /} <
//         Route path = "/book-ticket"
//         element = { < BookingForm / > }
//         /> <
//         Route path = "/bookings"
//         element = { < BookingsList / > }
//         /> <
//         /Routes>

//         <
//         ChatBot / >
//         <
//         /Router>
//     );
// }

// export default App;