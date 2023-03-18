const mongoose = require("mongoose")
const { MongoMemoryServer } = require("mongodb-memory-server")

let config = {
  Memory: true,
  IP: "127.0.0.1",
  Port: "27017",
}

let instance
beforeAll(async () => {
  let connectURI = `mongodb://${config.IP}:${config.Port}/test-bucket`
  if (config.Memory) {
    instance = await MongoMemoryServer.create()
    connectURI = instance.getUri() + "test-bucket"
  }
  try {
    await mongoose.connect(connectURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    // console.log("connected to test-db --> ", connectURI)
  } catch (err) {
    console.log("Failed to connect to test-db ", connectURI, err)
  }
})

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections()
  // console.log(collections)
  for (let collection of collections) {
    await collection.deleteMany({})
  }
})

afterAll(async () => {
  await mongoose.connection.close()
})
