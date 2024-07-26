import pool from "../config/database.js";
import bcrypt from "bcrypt";

export const signupUser = async (req, res) => {
  const { username, password } = req.body;

  try {
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
