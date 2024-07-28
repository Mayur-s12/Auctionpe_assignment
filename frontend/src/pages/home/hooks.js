/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { token } from "../../utils";
import { BASE_URL } from "../../config/apis";
import axios from "axios";

const useHome = () => {
  const [isSessionStarted, setIsSessionStarted] = useState(false);
  const [timer, setTimer] = useState(300);
  const [sessionId, setSessionId] = useState(null);

  const handleStartSession = async () => {
    try {
      const response = await axios.post(
        `${BASE_URL}/session/start`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSessionId(response.data.sessionId);
      setIsSessionStarted(true);
      setTimer(300);
    } catch (error) {
      console.error("Error starting session", error);
    }
  };

  const handleEndSession = async () => {
    try {
      await axios.post(
        `${BASE_URL}/session/end`,
        { sessionId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setIsSessionStarted(false);
    } catch (error) {
      console.error("Error ending session", error);
    }
  };

  const handleSession = () => {
    if (isSessionStarted) {
      handleEndSession();
    } else {
      handleStartSession();
    }
  };

  useEffect(() => {
    let interval;
    if (isSessionStarted && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      handleEndSession();
    }
    return () => clearInterval(interval);
  }, [handleEndSession, isSessionStarted, timer]);

  const formatTimer = (timer) => {
    const minutes = Math.floor(timer / 60);
    const seconds = String(timer % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return { handleSession, formatTimer, isSessionStarted, timer };
};

export default useHome;
