import React from "react";
import Input from "../../../components/Input";
import { logAction } from "../../../config/apis";
import "./index.css";

const SearchInput = ({ isSessionStarted, sessionId }) => {
  const handleSearch = async (e) => {
    if (isSessionStarted) {
      try {
        await logAction(sessionId, "Search Input");
      } catch (err) {
        console.log("error logging search action", err);
      }
    }
  };

  return (
    <div className='search-action-container'>
      <Input
        type='search'
        placeholder='Type here...'
        onChange={handleSearch}
        disabled={!isSessionStarted}
        className={isSessionStarted ? "" : "inactive-input"}
      />
    </div>
  );
};

export default SearchInput;
