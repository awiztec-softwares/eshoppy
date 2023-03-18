const { API_VER_1 } = require("./constants")

exports.docOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "APIs documentation",
      version: "1.0.0",
      description: "API Library for Starter Platform",
    },
    servers: [
      {
        url: API_VER_1,
      },
    ],
  },
  // apis: ["./routes/*"], // files containing annotations as above
  apis: ["__api_docs__/*"], // files containing annotations as above
}
