import React from 'react';
import { useNavigate, useOutletContext } from 'react-router';
import Button from '../../components/button';
import FormikInput from '../../components/formikInput';

const UserInfo = () => {
  const navigate = useNavigate();
  const { formik, nextStep } = useOutletContext();

  const handleNextStep = () => {
    nextStep();
    navigate('/more-info');
  }

  return (
    <div>
      <h2>Sign Up</h2>
      <FormikInput formik={formik} name="name" label="First Name" />
      <FormikInput formik={formik} name="email" label="Email" type="email" />
      <FormikInput formik={formik} name="password" label="Password" type="password" />

      <Button disabled={!(formik.isValid && formik.dirty)} onClick={handleNextStep}>Next</Button>
    </div>
  )
}

export default UserInfo;
