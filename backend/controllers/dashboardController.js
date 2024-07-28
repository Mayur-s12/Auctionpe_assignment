import pool from "../config/database.js";

export const getDashboardData = async (req, res) => {
  const userId = req.userId;
  const page = parseInt(req.query.page);
  const pageSize = parseInt(req.query.pageSize);
  const offset = (page - 1) * pageSize;

  try {
    const getDataQuery = `
            SELECT sessions.id AS session_id, 
                sessions.start_time, 
                sessions.end_time,
                actions.id AS action_id, 
                actions.action_type, 
                actions.action_timestamp
            FROM sessions
            LEFT JOIN actions ON sessions.id = actions.session_id
            WHERE sessions.user_id = ?
            ORDER BY sessions.start_time DESC, actions.action_timestamp
            LIMIT ?
            OFFSET ?;
        `;

    const getCount = `
      SELECT COUNT(*) as total 
      FROM sessions 
      WHERE user_id = ?;
  `;

    const [result] = await pool.query(getDataQuery, [userId, pageSize, offset]);
    const [countResult] = await pool.query(getCount, [userId]);
    const total = countResult[0].total;
    const dashboardData = [];

    result.forEach((row) => {
      const sessionIndex = dashboardData.findIndex(
        (item) => item.session_id === row.session_id
      );
      if (sessionIndex === -1) {
        dashboardData.push({
          session_id: row.session_id,
          start_time: row.start_time,
          end_time: row.end_time,
          actions: row.action_id
            ? [
                {
                  action_id: row.action_id,
                  action_type: row.action_type,
                  action_timestamp: row.action_timestamp,
                },
              ]
            : [],
        });
      } else {
        if (row.action_id) {
          dashboardData[sessionIndex].actions.push({
            action_id: row.action_id,
            action_type: row.action_type,
            action_timestamp: row.action_timestamp,
          });
        }
      }
    });

    res.status(200).json({ data: dashboardData, count: total });
  } catch (err) {
    console.log("Error fetching Dashboard Data", err);
    res.status(500).json({ message: "Internal Server Error", err });
  }
};
