import React, { useState, useEffect } from "react";
import BasicPomodoro from "./pomodoro-components/BasicPomodoro";
import SPPomodoro from "./pomodoro-components/SPPomodoro";
import EntryPage from "./pomodoro-components/EntryPage";
import SPBuilder from "./pomodoro-components/SPBuilder";

// CONDITIONAL RENDERING

function Pomodoro() {
  const [currentPage, setCurrentPage] = useState("entryPage");

  const handleStart = (cycles) => {
    if (cycles === "infinity") {
      setCurrentPage("basicPomodoro");
    } else {
      setCurrentPage("sPPomodoro");
    }
  };

  const handleSPClick = () => {
    setCurrentPage("sPBuilder");
  };

  return (
    // <>
    //   {currentPage === "entryPage" && (
    //     <EntryPage onStart={handleStart} onSPClick={handleSPClick} />
    //   )}
    //   {currentPage === "basicPomodoro" && <BasicPomodoro />}
    //   {currentPage === "sPBuilder" && <SPBuilder />}
    //   {currentPage === "sPPomodoro" && <SPPomodoro />}
    // </>

    // TODO for testing only
    <>
      <SPPomodoro />
    </>
  );
}

export default Pomodoro;
