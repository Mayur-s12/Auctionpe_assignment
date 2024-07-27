import pool from "../config/database.js";

export const logAction = async (req, res) => {
  const { sessionId, action_type } = req.body;

  try {
    const [result] = await pool.query(
      "INSERT INTO actions (session_id, action_type) VALUES (?, ?);",
      [sessionId, action_type]
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

export const getActionsBySession = async (req, res) => {
  const { sessionId } = req.params;

  try {
    const getActionsQuery = `
        SELECT * FROM actions
        WHERE session_id=? ;
    `;

    const [result] = await pool.query(getActionsQuery, [sessionId]);

    res.status(200).json(result);
  } catch (err) {
    console.log("Error fetching actions");
    res.status(500).json("Internal server error", err);
  }
};
