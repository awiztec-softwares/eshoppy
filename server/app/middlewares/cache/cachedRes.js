const apicache = require("apicache")
let cache = apicache.middleware

const cachedRes = (cacheTime) => {
  return (req, res, next) => {
    cache(cacheTime)
    req.cacheTime = cacheTime
    next()
  }
}

module.exports = cachedRes
