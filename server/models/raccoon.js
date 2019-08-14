console.log("inside of raccoon.js");

const mongoose = require("mongoose");

const RaccoonSchema = new mongoose.Schema({
    name: {type: String },
    color: {type: String },
    type: {type: String },
    age: {type: Number}
}, { timestamps: true });

mongoose.model("raccoon", RaccoonSchema);