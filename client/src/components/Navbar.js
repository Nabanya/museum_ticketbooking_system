import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return ( <
        nav className = "navbar" >
        <
        h1 > Museum Ticket Booking < /h1> <
        div className = "links" >
        <
        Link to = "/" > Home < /Link> <
        Link to = "/mybookings" > My Bookings < /Link> <
        /div> <
        /nav>
    );
};

export default Navbar;