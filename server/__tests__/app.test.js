const request = require("supertest")
const app = require("../app")
const { API_VER_1 } = require("../config/constants")

describe("Server testing " + API_VER_1, () => {
  it("GET /test/alive --> server live", () => {
    request(app)
      .get(API_VER_1 + "/test/alive")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            ok: expect.any(Boolean),
            message: expect.any(String),
            timeStamp: expect.any(String),
            cachedFor: expect.any(String),
          })
        )
      })
  })
})