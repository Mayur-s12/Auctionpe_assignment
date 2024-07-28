import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Text from "../../components/Text/index.jsx";
import { END, START } from "./constants";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import "./index.css";

const Home = () => {
  const [isSessionStarted, setIsSessionStarted] = useState(false);
  const [timer, setTimer] = useState(300);

  useEffect(() => {
    let interval;
    if (isSessionStarted && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsSessionStarted(false);
    }

    return () => clearInterval(interval);
  }, [isSessionStarted, timer]);

  const handleSession = () => {
    setIsSessionStarted((prev) => !prev);

    if (!isSessionStarted) {
      setTimer(300);
    }
  };

  const formatTimer = (timer) => {
    const minutes = Math.floor(timer / 60);
    const seconds = String(timer % 60).padStart(2, "0");
    return `${minutes} : ${seconds}`;
  };

  return (
    <div className='home-container'>
      <Header />
      <div className='display-time-and-button'>
        <Button onClick={handleSession} className='session-button'>
          {isSessionStarted ? END : START}
        </Button>
        <div className='timer'>
          <Text className='text-color'>{formatTimer(timer)}</Text>
          <AccessAlarmsIcon />
        </div>
      </div>
    </div>
  );
};

export default Home;
