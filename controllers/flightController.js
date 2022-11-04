const { Bookings } = require("../models/Flight")
const { v4: uuid } = require("uuid")

exports.getBookings = async (req, res) => {
  try {
    const bookings = Bookings;
    res.status(200).json({
      message: "All bookings",
      bookings: bookings
    })
  } catch (e) {
    res.status(500).json({ message: e })
  }
}

exports.getBooking = async (req, res) => {
  try {
    let id = req.params.id
    const booking = Bookings.find((booking) => booking.id === id)
    if (booking) {
      res.status(200).json({
        message: "Booking found",
        booking
      })
    } else {
      res.status(404).json({
        message: "Booking id not found"
      })
    }

  } catch (e) {
    res.status(500).json({ message: e })
  }
}

exports.createBooking = async (req, res) => {
  try {
    const { title, time, price, date } = await req.body;
    const newBooking = {
      id: uuid(),
      title,
      time,
      price,
      date
    }

    Bookings.push(newBooking)

    res.status(201).json({
      message: "New Booking created",
      newBooking
    })
  } catch (e) {
    res.status(500).json({ message: e })
  }
}

exports.updateBooking = async (req, res) => {
  try {
    let id = req.params.id
    const booking = Bookings.find((booking) => booking.id === id)
    const { title, time, price, date } = await req.body;

    if (booking) {
      booking.title = title;
      booking.time = time;
      booking.price = price;
      booking.date = date

      res.status(200).json({
        message: "Booking updated!",
        booking
      })
    } else {
      res.status(404).json({
        message: "Booking id not found"
      })
    }

  } catch (e) {
    res.status(500).json({ message: e })
  }
}

exports.deleteBooking = async (req, res) => {
  try {
    let id = req.params.id;
    const booking = Bookings.find((booking) => booking.id === id);
    if (booking) {
      Bookings.splice(Bookings.indexOf(booking), 1);
      res.status(200).json({
        message: "Booking deleted!",
        booking
      })
    } else {
      res.status(404).json({
        message: "Booking id not found"
      })
    }

  } catch (e) {
    res.status(500).json({ message: e })
  }
}

