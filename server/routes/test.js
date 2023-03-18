const router = require("express").Router()

const testControllers = require("../app/controllers/testControllers")
const cachedRes = require("../app/middlewares/cache/cachedRes")

//! tests
//! this routes should be removed in production deployment or shall be routed to the admin authorization
router.put("/force/crash", testControllers.crash)
router.get("/alive", cachedRes("30 second"), testControllers.alive)

module.exports = router
