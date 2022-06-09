import React from "react";
import { Field, Form, Formik } from "formik";
import { useState, useEffect } from "react";
import axios from "axios";

const Availability = () => {
  const [avails, setAvails] = useState([]);
  let availsLength = avails.length;

  useEffect(() => {
    fetchAvails();
  }, []);

  const fetchAvails = async () => {
    axios
      .get("http://localhost:5000/avails/all")
      .then((res) => {
        setAvails(res.data);
      })
      .catch((err) => `There was an error retrieving all avails: ${err}`);
  };

  const handleCreateAvail = (avails) => {
    axios.post("http://localhost:5000/avails/create", {
      sunday: avails.sunday,
      monday: avails.monday,
      tuesday: avails.tuesday,
      wednesday: avails.wednesday,
      thursday: avails.thursday,
      friday: avails.friday,
      saturday: avails.saturday,
    });
    fetchAvails();
  };

  const handleUpdateAvail = (avails) => {
    axios.put("http://localhost:5000/avails/update", {
      sunday: avails.sunday,
      monday: avails.monday,
      tuesday: avails.tuesday,
      wednesday: avails.wednesday,
      thursday: avails.thursday,
      friday: avails.friday,
      saturday: avails.saturday,
    });
    fetchAvails();
  };

  const getAvailList = (item) => {
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
    <div className="update-avail-container">
      <h3>Create or Update Your Schedule</h3>
      <Formik
        initialValues={{
          sunday: "not available",
          monday: "not available",
          tuesday: "not available",
          wednesday: "not available",
          thursday: "not available",
          friday: "not available",
          saturday: "not available",
        }}
        onSubmit={(avails) => {
          if (availsLength === 0) {
            handleCreateAvail(avails);
            console.log(`avails has been created: ${avails}`);
          } else if (availsLength !== 0) {
            handleUpdateAvail(avails);
            console.log(`avail has been updated: ${avails}`);
          }
          fetchAvails();
        }}
      >
        <Form>
          <h4>Sunday</h4>
          <Field as="select" name="sunday">
            <option value="not available">Not Available</option>
            <option value="Morning: 5am - 2pm">Morning: 5am - 2pm</option>
            <option value="Evening: 4pm - 9pm">Evening: 4pm - 9pm</option>
          </Field>
          <h4>Monday</h4>
          <Field as="select" name="monday">
            <option value="not available">Not Available</option>
            <option value="Morning: 5am - 2pm">Morning: 5am - 2pm</option>
            <option value="Evening: 4pm - 9pm">Evening: 4pm - 9pm</option>
          </Field>
          <h4>Tuesday</h4>
          <Field as="select" name="tuesday">
            <option value="not available">Not Available</option>
            <option value="Morning: 5am - 2pm">Morning: 5am - 2pm</option>
            <option value="Evening: 4pm - 9pm">Evening: 4pm - 9pm</option>
          </Field>
          <h4>Wednesday</h4>
          <Field as="select" name="wednesday">
            <option value="not available">Not Available</option>
            <option value="Morning: 5am - 2pm">Morning: 5am - 2pm</option>
            <option value="Evening: 4pm - 9pm">Evening: 4pm - 9pm</option>
          </Field>
          <h4>Thursday</h4>
          <Field as="select" name="thursday">
            <option value="not available">Not Available</option>
            <option value="Morning: 5am - 2pm">Morning: 5am - 2pm</option>
            <option value="Evening: 4pm - 9pm">Evening: 4pm - 9pm</option>
          </Field>
          <h4>Friday</h4>
          <Field as="select" name="friday">
            <option value="not available">Not Available</option>
            <option value="Morning: 5am - 2pm">Morning: 5am - 2pm</option>
            <option value="Evening: 4pm - 9pm">Evening: 4pm - 9pm</option>
          </Field>
          <h4>Saturday</h4>
          <Field as="select" name="saturday">
            <option value="not available">Not Available</option>
            <option value="Morning: 5am - 2pm">Morning: 5am - 2pm</option>
            <option value="Evening: 4pm - 9pm">Evening: 4pm - 9pm</option>
          </Field>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <div className="avail-container">
        <h3>My Availability</h3>
        <div>{avails.map(getAvailList)}</div>
      </div>
    </div>
  );
};

export default Availability;
