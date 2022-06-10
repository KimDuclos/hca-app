import axios from "axios";
import React, { useState, useEffect } from "react";

const CreateSchedule = () => {
  const [empAvails, setEmpAvails] = useState([]);

  useEffect(() => {
    fetchEmpAvails();
  }, []);

  const fetchEmpAvails = async () => {
    axios
      .get("http://localhost:5000/avails/all")
      .then((res) => {
        setEmpAvails(res.data);
      })
      .catch((err) => `There was an error retrieving all schedules: ${err}`);
  };


  const getEmpAvailList = (item) => {
    fetchEmpAvails();
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

  // fetchEmpAvails();

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
