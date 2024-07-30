import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  const initialValues = {
    name: "",
    email: "",
    website: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    website: Yup.string().url("Invalid URL format"),
    message: Yup.string().required("Message is required"),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log("Form data", values);
    alert("Your message has been sent!");
    resetForm();
  };

  return (
    <div className="contact-form">
      <h3>Get in Touch</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="form-group">
            <Field type="text" id="name" name="name" placeholder="Name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
          <div className="form-group">
            <Field type="email" id="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div className="form-group">
            <Field
              type="text"
              id="website"
              name="website"
              placeholder="Website"
            />
            <ErrorMessage name="website" component="div" className="error" />
          </div>
          <div className="form-group">
            <Field
              as="textarea"
              id="message"
              name="message"
              placeholder="Message"
            />
            <ErrorMessage name="message" component="div" className="error" />
          </div>
          <button type="submit">Send</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
