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

  const handleCreateAvail = () => {
    axios.post("http://localhost:5000/avails/create", {
      sunday: sunday,
      monday: monday,
      tuesday: tuesday,
      wednesday: wednesday,
      thursday: thursday,
      friday: friday,
      saturday: saturday,
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
        onSubmit={() => {
          console.log(
            sunday,
            monday,
            tuesday,
            wednesday,
            thursday,
            friday,
            saturday
          );
          console.log(`AVAILS: ${avails.sunday}`);
          handleCreateAvail();
        }}
      >
        <Form>
          <h4>Sunday</h4>
          <Field
            as="select"
            name="sunday"
            onChange={(e) => setSunday(e.target.value)}
          >
            <option sunday="Morning: 5am - 2pm">Morning: 5am - 2pm</option>
            <option sunday="Evening: 4pm - 9pm">Evening: 4pm - 9pm</option>
          </Field>
          <h4>Monday</h4>
          <Field
            as="select"
            name="monday"
            onChange={(e) => setMonday(e.target.value)}
          >
            <option monday="Morning: 5am - 2pm">Morning: 5am - 2pm</option>
            <option monday="Evening: 4pm - 9pm">Evening: 4pm - 9pm</option>
          </Field>

          <h4>Tuesday</h4>
          <Field
            as="select"
            name="tuesday"
            onChange={(e) => setTuesday(e.target.value)}
          >
            <option tuesday="Morning: 5am - 2pm">Morning: 5am - 2pm</option>
            <option tuesday="Evening: 4pm - 9pm">Evening: 4pm - 9pm</option>
          </Field>

          <h4>Wednesday</h4>
          <Field
            as="select"
            name="wednesday"
            onChange={(e) => setWednesday(e.target.value)}
          >
            <option wednesday="Morning: 5am - 2pm">Morning: 5am - 2pm</option>
            <option wednesday="Evening: 4pm - 9pm">Evening: 4pm - 9pm</option>
          </Field>

          <h4>Thursday</h4>
          <Field
            as="select"
            name="thursday"
            onChange={(e) => setThursday(e.target.value)}
          >
            <option thursday="Morning: 5am - 2pm">Morning: 5am - 2pm</option>
            <option thursday="Evening: 4pm - 9pm">Evening: 4pm - 9pm</option>
          </Field>

          <h4>Friday</h4>
          <Field
            as="select"
            name="friday"
            onChange={(e) => setFriday(e.target.value)}
          >
            <option friday="Morning: 5am - 2pm">Morning: 5am - 2pm</option>
            <option friday="Evening: 4pm - 9pm">Evening: 4pm - 9pm</option>
          </Field>

          <h4>Saturday</h4>
          <Field
            as="select"
            name="saturday"
            onChange={(e) => setSaturday(e.target.value)}
          >
            <option saturday="Morning: 5am - 2pm">Morning: 5am - 2pm</option>
            <option saturday="Evening: 4pm - 9pm">Evening: 4pm - 9pm</option>
          </Field>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <div className="avail-container">
        <h3>My Availability</h3>
        <div>{sunday.sunday}</div>
      </div>
    </div>
  );
};

export default Availability;
