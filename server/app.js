require("dotenv").config()
var compression = require("compression")
const express = require("express")
require("express-async-errors")
const app = express()
app.use(compression())
const morgan = require("morgan")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const errorHandler = require("./app/middlewares/error-handlers/error-handler")

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
)
app.use(morgan("dev"))
app.disable("x-powered-by")
// app.disable('etag')
app.use(cookieParser())
app.use(express.json())
app.use("/api/static", express.static("public"))

const router = require("./routes/router")
const { API_VER_1 } = require("./config/constants")
app.use(API_VER_1, router)

app.use(errorHandler)

module.exports = app
