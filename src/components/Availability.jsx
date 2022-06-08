import React from "react";
import { Field, Form, Formik } from "formik";
import { useState, useEffect } from "react";
import axios from "axios";

const Availability = () => {
  const [avails, setAvails] = useState("");
  const [sunday, setSunday] = useState("");
  const [monday, setMonday] = useState("");
  const [tuesday, setTuesday] = useState("");
  const [wednesday, setWednesday] = useState("");
  const [thursday, setThursday] = useState("");
  const [friday, setFriday] = useState("");
  const [saturday, setSaturday] = useState("");

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
  };

  return (
    <div className="update-avail-container">
      <h1>My Availability</h1>
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
          setSunday(sunday);
          setMonday(monday);
          setTuesday(tuesday);
          setWednesday(wednesday);
          setThursday(thursday);
          setFriday(friday);
          setSaturday(saturday);
          console.log(`AVAILS:
            Sunday: ${avails.sunday}
            Monday: ${avails.monday}
            Tuesday: ${avails.tuesday}
            Wednesday: ${avails.wednesday}
            Thursday: ${avails.thursday}
            Friday: ${avails.friday}
            Saturday: ${avails.saturday}
          `);
          handleCreateAvail(avails);
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
        <div>SUNDAY: {sunday}</div>
        <div>MONDAY: {avails.monday}</div>
        <div>TUESDAY: {avails.tuesday}</div>
        <div>WEDNESDAY: {avails.wednesday}</div>
        <div>THURSDAY: {avails.thursday}</div>
        <div>FRIDAY: {avails.friday}</div>
        <div>SATURDAY: {avails.saturday}</div>
      </div>
    </div>
  );
};

export default Availability;
