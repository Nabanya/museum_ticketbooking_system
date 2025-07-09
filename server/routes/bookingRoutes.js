// // server/routes/bookingRoutes.js

// const express = require('express');
// const router = express.Router();
// const Booking = require('../models/Booking');

// // POST /api/bookings/book
// router.post('/book', async(req, res) => {
//     try {

//         const newBooking = new Booking(req.body);
//         await newBooking.save();
//         res.status(201).json({ message: 'Booking successful!' });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Booking failed. Please try again.' });


//     }
// });


// // ✅ GET /api/bookings — Fetch all bookings
// router.get('/', async(req, res) => {
//     try {
//         const bookings = await Booking.find().sort({ date: -1 }); // latest first
//         res.json(bookings);
//     } catch (err) {
//         res.status(500).json({ message: 'Error fetching bookings' });
//     }
// });


// module.exports = router;


// server/routes/bookingRoutes.js

const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// POST /api/bookings/book
// router.post('/book', async(req, res) => {
//     try {
//         const { name, email, date, timeSlot, category, ticketCount, totalPrice } = req.body;

//         // ✅ Check slot capacity before booking
//         const existingCount = await Booking.aggregate([{
//                 $match: {
//                     date,
//                     timeSlot,
//                     isCancelled: false // Only count active bookings
//                 }
//             },
//             {
//                 $group: {
//                     _id: null,
//                     totalTickets: { $sum: "$ticketCount" }
//                 }
//             }
//         ]);

//         const alreadyBooked = existingCount.length > 0 ? existingCount[0].totalTickets : 0;
//         const maxTicketsPerSlot = 10;

//         if (alreadyBooked + ticketCount > maxTicketsPerSlot) {
//             return res.status(400).json({ message: "Sorry, this time slot is full. Please choose a different one." });
//         }

//         // ✅ Save new booking
//         const newBooking = new Booking(req.body);
//         await newBooking.save();
//         res.status(201).json({ message: 'Booking successful!' });

//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Booking failed. Please try again.' });
//     }
// });

router.post('/book', async(req, res) => {
    try {
        const { name, email, date, timeSlot, category, ticketCount, totalPrice } = req.body;

        // ✅ 1. Check if date is not in the past
        const selectedDate = new Date(date);
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Reset time to midnight

        if (selectedDate < today) {
            return res.status(400).json({ message: "❌ Cannot book for past dates. Please select today or a future date." });
        }

        // ✅ 2. Check slot capacity before booking
        const existingCount = await Booking.aggregate([{
                $match: {
                    date,
                    timeSlot,
                    isCancelled: false // Only count active bookings
                }
            },
            {
                $group: {
                    _id: null,
                    totalTickets: { $sum: "$ticketCount" }
                }
            }
        ]);

        const alreadyBooked = existingCount.length > 0 ? existingCount[0].totalTickets : 0;
        const maxTicketsPerSlot = 10;

        if (alreadyBooked + ticketCount > maxTicketsPerSlot) {
            return res.status(400).json({ message: "Sorry, this time slot is full. Please choose a different one." });
        }

        // ✅ 3. Save new booking
        const newBooking = new Booking(req.body);
        await newBooking.save();

        res.status(201).json({ message: '✅ Booking successful!' });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Booking slot is full. Please try for different one.' });
    }
});




// GET /api/bookings — Fetch all bookings
router.get('/', async(req, res) => {
    try {
        const bookings = await Booking.find().sort({ date: -1 }); // latest first
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching bookings' });
    }
});
router.delete('/:id', async(req, res) => {
    try {
        const result = await Booking.findByIdAndDelete(req.params.id);
        if (!result) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.json({ message: 'Booking cancelled successfully' });
    } catch (err) {
        console.error('Cancel error:', err);
        res.status(500).json({ message: 'Error cancelling booking' });
    }
});

module.exports = router;