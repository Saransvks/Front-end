import React from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';

const ApplyJobForm = () => {
  const handleSubmit = (values) => {
    axios.post('/api/jobs/apply', values)
      .then(response => alert('Application submitted'))
      .catch(error => alert('Error submitting application'));
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', resume: '' }}
      onSubmit={handleSubmit}
    >
      <Form>
        <Field name="name" placeholder="Name" />
        <Field name="email" placeholder="Email" />
        <Field name="resume" placeholder="Resume URL" />
        <button type="submit">Apply</button>
      </Form>
    </Formik>
  );
};

export default ApplyJobForm;
