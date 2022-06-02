import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import axios from "axios";

const CreateEmployee = () => {
  const [employees, setEmployees] = useState("");  
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
      axios
        .get("http://localhost:5000/employees/all")
        .then(res => {
            setEmployees(res.data)
        })
        .catch(err => (`There was an error retrieving all employees: ${err}`));
  }

  const handleCreateEmployee = () => {
    axios.post("http://localhost:5000/employees/create", {
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
          {name} {email} {employees}
        </div>
      </div>
    </div>
  );
};

export default CreateEmployee;
