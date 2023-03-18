const testControllers = {}
const { format } = require("date-fns")

testControllers.crash = async (req, res, next) => {
  process.exit()
  // throw new Error("Force Exit")
}

testControllers.alive = async (req, res, next) => {
  res.json({
    ok: true,
    message: "Server spinning",
    timeStamp: format(Date.now(), "dd-MM-y HH:mm:ss aa"),
    cachedFor: req.cacheTime,
  })
}

module.exports = testControllers
