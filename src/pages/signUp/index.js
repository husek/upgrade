import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useMutation } from 'react-query';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Loader, { Backdrop } from '../../components/loader';
import SignupSchema from '../../formSchemas/signup';
import MoreInfoSchema from '../../formSchemas/moreInfo';
import { apiClient } from '../../services/apiClient';

const stepByRoute = {
  '/': {
    step: 0,
    schema: SignupSchema
  },
  '/more-info': {
    step: 1,
    schema: MoreInfoSchema,
  },
  '/confirmation': {
    step: 2,
    schema: undefined
  },
  '/success': {
    step: 3,
    schema: undefined
  },
  '/error': {
    step: 3,
    schema: undefined
  }
}

const SignUpForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const stepInfo = stepByRoute[location.pathname];
  const [step, setCurrentStep] = useState(stepInfo.step);

  const { isLoading, mutate } = useMutation(async (values) => await apiClient.post(`/submit`, values),
    {
      onSuccess: () => {
        navigate('/success');
        setCurrentStep(3);
      },
      onError: (err) => {
        console.error(err);
        navigate('/error');
        setCurrentStep(3);
      }
    }
  );

  const nextStep = () => setCurrentStep(step + 1);
  const previousStep = () => setCurrentStep(step - 1);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      color: '',
      terms: false
    },
    enableReinitialize: true,
    validationSchema: stepInfo.schema,
    validateOnBlur: true,
    onSubmit: mutate
  });


  const resetForm = () => {
    formik.resetForm();
    setCurrentStep(0);
    navigate('/');
  }

  // Re-validate form once we change step, necessary for dynamic validationSchemas
  useEffect(() => {
    formik.validateForm()
  }, [step]);

  // Handle cold-start on routes
  useEffect(() => {
    if (!formik.values.name || !formik.values.email || !formik.values.password) {
      navigate('/', { replace: true });
      return;
    }

    if (!formik.values.terms || !formik.values.color) {
      navigate('/more-info', { replace: true });
    }
  }, []);

  return (
    <>
      {isLoading && (
        <Backdrop>
          <Loader />
        </Backdrop>
      )}
      <form onSubmit={formik.handleSubmit}>
        <Outlet context={{ formik, nextStep, previousStep, resetForm }} />
      </form>
    </>
  )
}

export default SignUpForm;
