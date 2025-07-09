// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './BookingsList.css';

// const BookingsList = () => {
//     const [bookings, setBookings] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchBookings = async() => {
//             try {
//                 const res = await axios.get('http://localhost:5000/api/bookings');
//                 setBookings(res.data);
//                 setLoading(false);
//             } catch (err) {
//                 console.error('Error fetching bookings:', err);
//                 setLoading(false);
//             }
//         };


//         fetchBookings();
//     }, []);

//     return ( <
//             div className = "booking-list" >
//             <
//             h2 > All Bookings < /h2> {
//             loading ? ( <
//                 p > Loading... < /p>
//             ) : bookings.length === 0 ? ( <
//                 p > No bookings yet. < /p>
//             ) : ( <
//                 div className = "booking-cards" > {
//                     bookings.map((booking, index) => ( <
//                         div key = { index }
//                         className = "booking-card" >
//                         <
//                         h3 > { booking.name } < /h3> <
//                         p > < strong > Email: < /strong> {booking.email}</p >
//                         <
//                         p > < strong > Date: < /strong> {new Date(booking.date).toLocaleDateString()}</p >
//                         <
//                         p > < strong > Category: < /strong> {booking.category}</p >
//                         <
//                         p > < strong > Tickets: < /strong> {booking.ticketCount}</p >
//                         <
//                         p > < strong > Total: < /strong> ₹{booking.totalPrice}</p >
//                         <
//                         /div>
//                     ))
//                 } <
//                 /div>
//             )
//         } <
//         /div>
// );
// };

// export default BookingsList;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './BookingsList.css';

const BookingsList = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBookings = async() => {
            try {
                const res = await axios.get('http://localhost:5000/api/bookings');
                setBookings(res.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching bookings:', err);
                setLoading(false);
            }
        };

        fetchBookings();
    }, []);

    // 💡 Cancel Booking Handler
    const handleCancel = async(id) => {
        try {
            await axios.delete(`http://localhost:5000/api/bookings/${id}`);
            setBookings(bookings.filter(b => b._id !== id)); // update UI
        } catch (err) {
            console.error('Cancellation failed:', err);
            alert('Failed to cancel booking');
        }
    };

    return ( <
            div className = "booking-list" >
            <
            h2 > All Bookings < /h2> {
            loading ? ( <
                p > Loading... < /p>
            ) : bookings.length === 0 ? ( <
                p > No bookings yet. < /p>
            ) : ( <
                div className = "booking-cards" > {
                    bookings.map((booking, index) => ( <
                        div key = { index }
                        className = "booking-card" >
                        <
                        h3 > { booking.name } < /h3> <
                        p > < strong > Email: < /strong> {booking.email}</p >
                        <
                        p > < strong > Date: < /strong> {new Date(booking.date).toLocaleDateString()}</p >
                        <
                        p > < strong > Time Slot: < /strong> {booking.timeSlot || 'N'} < /
                        p > <
                        p > < strong > Category: < /strong> {booking.category}</p >
                        <
                        p > < strong > Tickets: < /strong> {booking.ticketCount}</p >
                        <
                        p > < strong > Total: < /strong> ₹{booking.totalPrice}</p >
                        <
                        button onClick = {
                            () => handleCancel(booking._id)
                        }
                        className = "cancel-btn" >
                        Cancel Booking <
                        /button> < /
                        div >
                    ))
                } <
                /div>
            )
        } <
        /div>
);
}

export default BookingsList;