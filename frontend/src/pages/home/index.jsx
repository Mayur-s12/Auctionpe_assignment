import Header from "../../components/Header";
import Button from "../../components/Button";
import Text from "../../components/Text/index.jsx";
import { ACTION_HEADING, END, START } from "./constants";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import ToggleButton from "./toggle-button/index.jsx";
import SearchInput from "./search-action/index.jsx";
import Counter from "./counter/index.jsx";
import Slider from "./slider/index.jsx";
import Selector from "./selector/index.jsx";
import useHome from "./hooks.js";
import "./index.css";

const Home = () => {
  const { handleSession, formatTimer, isSessionStarted, timer, sessionId } =
    useHome();

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
      <Text className='item-text'>{ACTION_HEADING}</Text>
      <div className='display-action-items'>
        <ToggleButton
          isSessionStarted={isSessionStarted}
          sessionId={sessionId}
        />
        <SearchInput
          isSessionStarted={isSessionStarted}
          sessionId={sessionId}
        />
        <Counter isSessionStarted={isSessionStarted} sessionId={sessionId} />
        <Slider isSessionStarted={isSessionStarted} sessionId={sessionId} />
        <Selector isSessionStarted={isSessionStarted} sessionId={sessionId} />
      </div>
    </div>
  );
};

export default Home;
