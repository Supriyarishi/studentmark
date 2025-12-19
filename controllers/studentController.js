const Student = require("../models/Student");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRET = "student_secret";

// Register student
exports.register = async (req, res) => {
  try {
    const exists = await Student.findOne({ rollno: req.body.rollno });
    if (exists) return res.status(400).send("Roll number already registered");

    const hash = await bcrypt.hash(req.body.password, 10);
    const student = await Student.create({
      rollno: req.body.rollno,
      name: req.body.name,
      password: hash,
      marks: req.body.marks
    });

    res.json({ message: "Registered successfully", student: { rollno: student.rollno, name: student.name } });
  } catch (err) {
    res.status(500).send("Error registering student");
  }
};

// Login student
exports.login = async (req, res) => {
  try {
    const stu = await Student.findOne({ rollno: req.body.rollno });
    if (!stu) return res.status(400).send("Student not found");

    const ok = await bcrypt.compare(req.body.password, stu.password);
    if (!ok) return res.status(400).send("Wrong password");

    const token = jwt.sign({ id: stu._id }, SECRET, { expiresIn: "1h" });
    res.json({ token });
  } catch (err) {
    res.status(500).send("Error logging in");
  }
};

// Auth middleware
exports.auth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).send("Token missing");

  const token = authHeader.split(" ")[1];
  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) return res.status(401).send("Invalid token");
    req.id = decoded.id;
    next();
  });
};

// Get student marks
exports.getMarks = async (req, res) => {
  try {
    const student = await Student.findById(req.id).select("-password -__v");
    if (!student) return res.status(404).send("Student not found");
    res.json(student);
  } catch (err) {
    res.status(500).send("Error fetching student data");
  }
};

// Update student marks
exports.updateMarks = async (req, res) => {
  try {
    const updated = await Student.findByIdAndUpdate(
      req.id,
      { marks: req.body.marks },
      { new: true, select: "-password -__v" }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).send("Error updating marks");
  }
};
