const router = require("express").Router()
const controller = require("../controllers/flightController")

router.get("/", controller.getBookings);

router.get("/:id", controller.getBooking)

router.post("/", controller.createBooking)

router.put("/:id", controller.updateBooking)

router.delete("/:id", controller.deleteBooking)

module.exports = router;