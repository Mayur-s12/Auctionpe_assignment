import pool from "../config/database.js";

export const startSession = async (req, res) => {
  const userId = req.userId;

  const startSessionQuery = `
        INSERT INTO sessions (user_id)
        VALUES (?);
    `;

  const [result] = await pool.query(startSessionQuery, [userId]);

  res.status(201).json({ sessionId: result.insertId });
};

export const endSession = async (req, res) => {
  const { sessionId } = req.body;

  try {
    const endSessionQuery = `
        UPDATE sessions
        SET end_time=CURRENT_TIMESTAMP
        WHERE id=?
  `;

    const [result] = await pool.query(endSessionQuery, [sessionId]);

    res.status(200).json({ message: "Session Ended" });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", err });

    console.log("Error Ending Session", err);
  }
};
