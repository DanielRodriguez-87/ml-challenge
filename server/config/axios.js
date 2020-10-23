const axios = require("axios");

module.exports = axios.create({ baseURL: process.env.ML_API_BASE_URL });
