const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  rollno: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  marks: {
    tamil: Number,
    english: Number,
    maths: Number,
    science: Number,
    social: Number
  }
});

module.exports = mongoose.model("Student", studentSchema);
