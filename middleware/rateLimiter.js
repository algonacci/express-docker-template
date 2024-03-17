const { rateLimit } = require('express-rate-limit')

const message = {
    status: {
        code: 429,
        message: "Rate limit exceeded. Please try again later."
    },
    data: null
}

const limit = (reqLimit) => {
return rateLimit({
        windowMs: 1 * 60 * 1000, // 1 minutes
        limit: reqLimit, // Limit 10 request per minutes.
        legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
        message,
        statusCode: 429
        // store: ... , // Use an external store for consistency across multiple server instances.
    })
}

module.exports = limit