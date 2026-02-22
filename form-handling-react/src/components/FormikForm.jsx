import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Yup validation schema
const RegistrationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const FormikForm = () => {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={RegistrationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        alert("Registration Successful!");
        resetForm();
      }}
    >
      <Form style={{ maxWidth: "400px", margin: "20px auto" }}>
        <h2>Formik Form</h2>

        <div style={{ marginBottom: "10px" }}>
          <label>Username:</label>
          <Field name="username" type="text" />
          <ErrorMessage name="username" component="div" style={{ color: "red" }} />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="div" style={{ color: "red" }} />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Password:</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" component="div" style={{ color: "red" }} />
        </div>

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;