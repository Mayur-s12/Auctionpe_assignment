import axios from "axios";
import { token } from "../utils";

export const BASE_URL = "https://auctionpe-assignment-backend.onrender.com";

export const logAction = async (sessionId, actionType) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/action/log`,
      { sessionId, action_type: actionType },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error logging action", error);
  }
};
