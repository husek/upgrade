import React, { useMemo } from 'react';
import Loader from '../loader';
import { StyledInput, ErrorMessage, FormLabel, InputWrapper, StyledSelect, SelectLoader } from './styles';

const FormikInput = ({ name, formik, label, type = 'text', children, loading }) => {
  const hasError = useMemo(() => (formik.errors[name] && formik.touched[name]), [formik.errors, formik.touched]);
  const CurrentInputComponent = useMemo(() => type !== 'select' ? StyledInput : StyledSelect, [type]);

  return (
    <>
      {loading && <SelectLoader><Loader size="60" /></SelectLoader>}
      <InputWrapper>
        <FormLabel type={type}>{label}</FormLabel>
        <CurrentInputComponent
          aria-label={label}
          aria-required="true"
          type={type}
          name={name}
          value={formik.values[name]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={hasError}
          {...{ children }}
        />
        {hasError && <ErrorMessage>{formik.errors[name]}</ErrorMessage>}
      </InputWrapper>
    </>
  )
};

export default FormikInput;
