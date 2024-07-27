import pool from "../config/database.js";

export const logAction = async (req, res) => {
  const { sessionId, actionType } = req.body;

  try {
    const [result] = await pool.query(
      "INSERT INTO actions (session_id, action_type) VALUES (?, ?);",
      [sessionId, actionType]
    );

    res.status(201).json({
      message: "Action logged successfully",
      actionId: result.insertId,
    });
  } catch (err) {
    console.log("Error logging action", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
