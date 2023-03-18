const CustomError = require("./custom-error")
const chalk = require("chalk")

const errorHandler = (err, req, res, next) => {
  console.log(chalk.bgRed("[ERR-HANDLER]"), chalk.inverse(err))
  if (err instanceof CustomError) {
    return res
      .status(err.statusCode)
      .json({ ok: false, errors: err.serializeErrors() })
  }
  res.status(400).send({
    ok: false,
    errors: [{ message: "Unhandled Server Error", err }],
  })
}

module.exports = errorHandler
