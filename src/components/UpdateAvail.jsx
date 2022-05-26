import React from "react";
import { Field, Form, Formik } from "formik";

// const MyInput = ({ field, form, ...props }) => {
//   return <input {...field} {...props} />;
// };

const UpdateAvail = () => (
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
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
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
  </div>
);

export default UpdateAvail;
