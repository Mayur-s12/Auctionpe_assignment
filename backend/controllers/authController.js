import pool from "../config/database.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signupUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const userQuery = `
      SELECT * FROM users 
      WHERE username=?;
      `;
    const [result] = await pool.query(userQuery, [username]);
    const user = result[0];

    if (user) {
      return res.status(401).json({ message: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const signupUserQuery = `
        INSERT INTO users(username, password) 
        VALUES (?, ?);
  `;

    const response = await pool.query(signupUserQuery, [
      username,
      hashedPassword,
    ]);

    res.status(201).json({ message: "User Created Successfully" });
  } catch (error) {
    console.log("Error creating user", error);

    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const loginQuery = `
      SELECT * FROM users 
      WHERE username=? ;
    `;

    const [result] = await pool.query(loginQuery, [username]);
    const user = result[0];

    if (!user) {
      return res.status(401).json({ message: "Invalid User" });
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (isPasswordMatched) {
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET_KEY);

      return res.status(200).json({ token, message: "Login Successful" });
    } else {
      return res.status(401).json({ message: "Invalid Credentials" });
    }
  } catch (err) {
    console.log("Error Logging In", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
