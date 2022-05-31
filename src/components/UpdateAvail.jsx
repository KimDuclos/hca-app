import React from "react";
import { Field, Form, Formik } from "formik";
import { useState } from "react";

const UpdateAvail = () => {
  const [values, setValues] = useState("");
  return (
    <div>
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
        onSubmit={(values) => {
          setValues(values);
          console.log(`VALUES: ${values.sunday}`);
        }}
      >
        <Form>
          <h4>Sunday</h4>
          <Field as="select" name="sunday">
            <option value="">Select Shift</option>
            <option value="Morning: 5am - 2pm">Morning: 5am - 2pm</option>
            <option value="Evening: 4pm - 9pm">Evening: 4pm - 9pm</option>
          </Field>
          <h4>Monday</h4>
          <Field as="select" name="monday">
            <option value="">Select Shift</option>
            <option value="Morning: 5am - 2pm">Morning: 5am - 2pm</option>
            <option value="Evening: 4pm - 9pm">Evening: 4pm - 9pm</option>
          </Field>

          <h4>Tuesday</h4>
          <Field as="select" name="tuesday">
            <option value="">Select Shift</option>
            <option value="Morning: 5am - 2pm">Morning: 5am - 2pm</option>
            <option value="Evening: 4pm - 9pm">Evening: 4pm - 9pm</option>
          </Field>

          <h4>Wednesday</h4>
          <Field as="select" name="wednesday">
            <option value="">Select Shift</option>
            <option value="Morning: 5am - 2pm">Morning: 5am - 2pm</option>
            <option value="Evening: 4pm - 9pm">Evening: 4pm - 9pm</option>
          </Field>

          <h4>Thursday</h4>
          <Field as="select" name="thursday">
            <option value="">Select Shift</option>
            <option value="Morning: 5am - 2pm">Morning: 5am - 2pm</option>
            <option value="Evening: 4pm - 9pm">Evening: 4pm - 9pm</option>
          </Field>

          <h4>Friday</h4>
          <Field as="select" name="friday">
            <option value="select">Select Shift</option>
            <option value="Morning: 5am - 2pm">Morning: 5am - 2pm</option>
            <option value="Evening: 4pm - 9pm">Evening: 4pm - 9pm</option>
          </Field>

          <h4>Saturday</h4>
          <Field as="select" name="saturday">
            <option value="select">Select Shift</option>
            <option value="Morning: 5am - 2pm">Morning: 5am - 2pm</option>
            <option value="Evening: 4pm - 9pm">Evening: 4pm - 9pm</option>
          </Field>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <div className="avail-container">
        <h3>My Availability</h3>
        <div>Sunday: {values.sunday}</div>
        <div>Monday: {values.monday}</div>
        <div>Tuesday: {values.tuesday}</div>
        <div>Wednesday: {values.wednesday}</div>
        <div>Thursday: {values.thursday}</div>
        <div>Friday{values.friday}</div>
        <div>Saturday: {values.saturday}</div>
      </div>
    </div>
  );
};

export default UpdateAvail;
