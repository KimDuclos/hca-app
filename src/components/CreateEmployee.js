import React, { useState } from "react";
import { Formik, Form } from "formik";
import axios from "axios";

const CreateEmployee = () => {
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");

  const handleCreateEmployee = () => {
    axios.post("http://localhost:4000/employees/create", {
      name: name,
      email: email,
    });
  };

  return (
    <div className="create-emp-container">
      <h3>Create New Employee</h3>
      <Formik
        initialValues={{
          name: " ",
          email: " ",
        }}
        onSubmit={() => {
          console.log(name, email);
          handleCreateEmployee();
        }}
      >
        <Form>
          <label htmlFor="name">Employee Name</label>
          <input
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Employee Email</label>
          <input
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <div className="emp-list">
        <h3>Employee List</h3>
        <div>
          {name} {email}
        </div>
      </div>
    </div>
  );
};

export default CreateEmployee;
