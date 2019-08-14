console.log("inside of mongoose.js")

const mongoose = require("mongoose");

module.exports = function (DB_NAME) {
    mongoose.connect(`mongodb://localhost/${DB_NAME}`, { useNewUrlParser: true });
    require("../models/raccoon");
}