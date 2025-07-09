const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    name: String,
    email: String,
    date: String, // Format: YYYY-MM-DD
    timeSlot: {
        type: String,
        required: true // New field: Required
    },
    category: String,
    ticketCount: Number,
    totalPrice: Number,
    isCancelled: {
        type: Boolean,
        default: false // New field: Default false
    },
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);