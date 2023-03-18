const mongoose = require("mongoose")

const configureDB = () => {
  let url = process.env.LOCAL_DB
  let locate = "local"
  if (
    process.env.NODE_ENV === "production" &&
    process.env.DB_ACCESS === "production"
  ) {
    url = process.env.CLOUD_DB
    locate = "remote-production"
  } else if (
    process.env.NODE_ENV === "production" &&
    process.env.DB_ACCESS === "development"
  ) {
    url = process.env.CLOUD_DB_DEV
    locate = "remote-development"
  } else if (
    process.env.NODE_ENV === "development" &&
    process.env.DB_ACCESS === "development"
  ) {
    url = process.env.CLOUD_DB_DEV
    locate = "remote-development"
  } else if (
    process.env.NODE_ENV === "development" &&
    process.env.DB_ACCESS === "production"
  ) {
    url = process.env.LOCAL_DB
    locate = "local-production"
  }
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`connected to db-${locate}...`)
    })
    .catch((err) => console.log(err))
}

module.exports = configureDB
