import axios from "axios";
import React, { useState, useEffect } from "react";

const CreateSchedule = ({empAvails}) => {

  const getEmpAvailList = (item) => {
    return (
      <ul key={Math.random()}>
        <li>Sunday: {item.sunday}</li>
        <li>Monday: {item.monday}</li>
        <li>Tuesday: {item.tuesday}</li>
        <li>Wednesday: {item.wednesday}</li>
        <li>Thursday: {item.thursday}</li>
        <li>Friday: {item.friday}</li>
        <li>Saturday: {item.saturday}</li>
      </ul>
    );
  };

  return (
    <div className="make-schedule-container">
      <h3>Create Employee Schedule</h3>
      <div className="employee-schedule-container">
        <h3>Employee Schedules</h3>
        <div>{empAvails.map(getEmpAvailList)}</div>
      </div>
    </div>
  );
};

export default CreateSchedule;
