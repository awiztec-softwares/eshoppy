const app = require("./app.js")
const chalk = require("chalk")
const port = process.env.PORT || 8080

if (process.env.NODE_ENV === "development") {
  const swaggerUI = require("swagger-ui-express")
  const swaggerJsdoc = require("swagger-jsdoc")
  const { docOptions } = require("./config/swagger")

  const openApiSpecs = swaggerJsdoc(docOptions)
  app.use(`/api-docs`, swaggerUI.serve, swaggerUI.setup(openApiSpecs))
}

const db = require("./config/database")
db()

app.listen(port, () => {
  console.log(chalk.bgBlue("Listening on PORT"), "-->", port)
})
