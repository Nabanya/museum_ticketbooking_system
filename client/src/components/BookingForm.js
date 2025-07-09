// import React, { useState } from 'react';
// import axios from 'axios';
// import jsPDF from 'jspdf';
// import QRCode from 'qrcode';
// import '../App.css';

// const BookingForm = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         date: '',
//         timeSlot: '',
//         category: 'General',
//         ticketCount: 1,


//     });

//     const [message, setMessage] = useState('');
//     const [showDownload, setShowDownload] = useState(false);
//     const [ticketData, setTicketData] = useState(null);
//     const handleChange = (e) => {
//         setFormData({...formData, [e.target.name]: e.target.value });
//     };



//     const handleSubmit = async(e) => {
//         e.preventDefault();

//         const selectedDate = new Date(formData.date);
//         const today = new Date();
//         today.setHours(0, 0, 0, 0); // Reset time to 00:00:00

//         if (selectedDate < today) {
//             setMessage('❌ Cannot book for past dates. Please select a valid future date.');
//             return;
//         }

//         const totalPrice = formData.category === 'VIP' ?
//             formData.ticketCount * 500 :
//             formData.ticketCount * 200;

//         try {
//             const res = await axios.post('http://localhost:5000/api/bookings/book', {
//                 ...formData,
//                 totalPrice
//             });
//             setMessage(res.data.message);
//             setTicketData({...formData, totalPrice }); // 🆕 Save the ticket info
//             setShowDownload(true);
//             setFormData({
//                 name: '',
//                 email: '',
//                 date: '',
//                 category: 'General',
//                 ticketCount: 1,
//             });
//         } catch (err) {
//             setMessage('Booking failed. Please try again.');
//         }
//     };


//     const generatePDF = async() => {
//         const doc = new jsPDF();
//         const totalPrice = ticketData.category === 'VIP' ?
//             ticketData.ticketCount * 500 :
//             ticketData.ticketCount * 200;

//         const qrData = `🎟️ Museum Ticket
// Name: ${ticketData.name}
// Email: ${ticketData.email}
// Date: ${ticketData.date}
// Time:${ticketData.timeSlot}
// Category: ${ticketData.category}
// Tickets: ${ticketData.ticketCount}
// Total: ₹${totalPrice}`;

//         try {
//             const qrImageUrl = await QRCode.toDataURL(qrData);

//             doc.setFontSize(16);
//             doc.text("🎟️ Museum Ticket", 20, 20);
//             doc.setFontSize(12);
//             doc.text(`Name: ${ticketData.name}`, 20, 40);
//             doc.text(`Email: ${ticketData.email}`, 20, 50);
//             doc.text(`Date: ${ticketData.date}`, 20, 60);
//             doc.text(`Time Slot: ${ticketData.timeSlot}`, 20, 70);
//             doc.text(`Category: ${ticketData.category}`, 20, 80);
//             doc.text(`Tickets: ${ticketData.ticketCount}`, 20, 90);
//             doc.text(`Total Price: ₹${totalPrice}`, 20, 100);

//             doc.addImage(qrImageUrl, 'PNG', 140, 40, 50, 50);

//             doc.save("museum_ticket.pdf");
//         } catch (err) {
//             console.error('QR code generation failed:', err);
//         }
//     };

//     return ( <
//         div className = "container" >
//         <
//         h2 > 🎫Book Your Museum Ticket < /h2> {
//         message && < p className = "message" > { message } < /p>} <
//         form onSubmit = { handleSubmit } >
//         <
//         input name = "name"
//         placeholder = "Your Name"
//         value = { formData.name }
//         onChange = { handleChange }
//         required / >
//         <
//         input name = "email"
//         type = "email"
//         placeholder = "Email"
//         value = { formData.email }
//         onChange = { handleChange }
//         required / >
//         <
//         input name = "date"
//         type = "date"
//         value = { formData.date }
//         onChange = { handleChange }
//         required / >
//         <
//         select name = "category"
//         value = { formData.category }
//         onChange = { handleChange } >
//         <
//         option value = "General" > General < /option> <
//         option value = "VIP" > VIP < /option> < /
//         select > <
//         input name = "ticketCount"
//         type = "number"
//         min = "1"
//         value = { formData.ticketCount }
//         onChange = { handleChange }
//         required / >
// <
// select name = "timeSlot"
// value = { formData.timeSlot }
// onChange = { handleChange }
// required >
// <
// option value = "" > Select Time Slot < /option> <
// option value = "10:00 AM - 11:00 AM" > 10: 00 AM - 11: 00 AM < /option> <
// option value = "11:00 AM - 12:00 PM" > 11: 00 AM - 12: 00 PM < /option> <
// option value = "12:00 PM - 01:00 PM" > 12: 00 PM - 01: 00 PM < /option> <
// option value = "02:00 PM - 03:00 PM" > 02: 00 PM - 03: 00 PM < /option> <
// option value = "03:00 PM - 04:00 PM" > 03: 00 PM - 04: 00 PM < /option> < /
// select >

//         <
//         button type = "submit" > Book Now < /button> < /
//         form > {
//             showDownload && ticketData && ( <
//                 button className = "download-btn"
//                 onClick = { generatePDF } >
//                 Download Ticket <
//                 /button>
//             )
//         } <
//         /div>
//     );
// };

// export default BookingForm;


import React, { useState } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import QRCode from 'qrcode';
import '../App.css';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        timeSlot: '',
        category: 'General',
        ticketCount: 1,
    });

    const [message, setMessage] = useState('');
    const [showDownload, setShowDownload] = useState(false);
    const [ticketData, setTicketData] = useState(null);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        const selectedDate = new Date(formData.date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const sixtyDaysFromToday = new Date();
        sixtyDaysFromToday.setDate(today.getDate() + 60);

        if (selectedDate < today) {
            setMessage('❌ Cannot book for past dates. Please select a valid future date.');
            return;
        }

        if (selectedDate > sixtyDaysFromToday) {
            setMessage('❌ Bookings can only be made up to 60 days in advance.');
            return;
        }

        const totalPrice = formData.category === 'VIP' ?
            formData.ticketCount * 500 :
            formData.ticketCount * 200;

        try {
            const res = await axios.post('http://localhost:5000/api/bookings/book', {
                ...formData,
                totalPrice
            });
            setMessage(res.data.message);
            setTicketData({...formData, totalPrice });
            setShowDownload(true);
            setFormData({
                name: '',
                email: '',
                date: '',
                timeSlot: '',
                category: 'General',
                ticketCount: 1,
            });
        } catch (err) {
            setMessage('Booking failed. Please try again.');
        }
    };

    const generatePDF = async() => {
        const doc = new jsPDF();
        const totalPrice = ticketData.category === 'VIP' ?
            ticketData.ticketCount * 500 :
            ticketData.ticketCount * 200;

        const qrData = `🎟️ Museum Ticket
Name: ${ticketData.name}
Email: ${ticketData.email}
Date: ${ticketData.date}
Time: ${ticketData.timeSlot}
Category: ${ticketData.category}
Tickets: ${ticketData.ticketCount}
Total: ₹${totalPrice}`;

        try {
            const qrImageUrl = await QRCode.toDataURL(qrData);

            doc.setFontSize(16);
            doc.text("🎟️ Museum Ticket", 20, 20);
            doc.setFontSize(12);
            doc.text(`Name: ${ticketData.name}`, 20, 40);
            doc.text(`Email: ${ticketData.email}`, 20, 50);
            doc.text(`Date: ${ticketData.date}`, 20, 60);
            doc.text(`Time Slot: ${ticketData.timeSlot}`, 20, 70);
            doc.text(`Category: ${ticketData.category}`, 20, 80);
            doc.text(`Tickets: ${ticketData.ticketCount}`, 20, 90);
            doc.text(`Total Price: ₹${totalPrice}`, 20, 100);

            doc.addImage(qrImageUrl, 'PNG', 140, 40, 50, 50);
            doc.save("museum_ticket.pdf");
        } catch (err) {
            console.error('QR code generation failed:', err);
        }
    };

    // Date limits for input
    const todayStr = new Date().toISOString().split("T")[0];
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 60);
    const maxDateStr = maxDate.toISOString().split("T")[0];

    return ( <
        div className = "container" >
        <
        h2 > 🎫Book Your Museum Ticket < /h2> {
        message && < p className = "message" > { message } < /p>} <
        form onSubmit = { handleSubmit } >
        <
        input name = "name"
        placeholder = "Your Name"
        value = { formData.name }
        onChange = { handleChange }
        required /
        >
        <
        input name = "email"
        type = "email"
        placeholder = "Email"
        value = { formData.email }
        onChange = { handleChange }
        required /
        >
        <
        input name = "date"
        type = "date"
        min = { todayStr }
        max = { maxDateStr }
        value = { formData.date }
        onChange = { handleChange }
        required / >



        <
        select name = "timeSlot"
        value = { formData.timeSlot }
        onChange = { handleChange }
        required >
        <
        option value = "" > Select Time Slot < /option> <
        option value = "10:00 AM - 11:00 AM" > 10: 00 AM - 11: 00 AM < /option> <
        option value = "11:00 AM - 12:00 PM" > 11: 00 AM - 12: 00 PM < /option> <
        option value = "12:00 PM - 01:00 PM" > 12: 00 PM - 01: 00 PM < /option> <
        option value = "02:00 PM - 03:00 PM" > 02: 00 PM - 03: 00 PM < /option> <
        option value = "03:00 PM - 04:00 PM" > 03: 00 PM - 04: 00 PM < /option> < /
        select >

        <
        select name = "category"
        value = { formData.category }
        onChange = { handleChange } >
        <
        option value = "General" > General < /option> <
        option value = "VIP" > VIP < /option> < /
        select > <
        input name = "ticketCount"
        type = "number"
        min = "1"
        value = { formData.ticketCount }
        onChange = { handleChange }
        required /
        >
        <
        button type = "submit" > Book Ticket < /button> < /
        form >

        {
            showDownload && ( <
                button onClick = { generatePDF }
                className = "download-btn" > 📄Download Ticket(PDF) <
                /button>
            )
        } <
        /div>
    );
};

export default BookingForm;