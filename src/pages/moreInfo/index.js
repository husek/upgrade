import React from 'react';
import Button from '../../components/button';
import { useNavigate, useOutletContext } from 'react-router';
import FormikInput from '../../components/formikInput';
import useColors from '../../hooks/useColors';

const MoreInfo = () => {
  const navigate = useNavigate();
  const { formik, nextStep, previousStep } = useOutletContext();
  const { colors, isLoading } = useColors();

  const handlePrevStep = () => {
    previousStep();
    navigate('/');
  }

  const handleNextStep = () => {
    nextStep();
    navigate('/confirmation');
  }

  return (
    <div>
      <h2>Additional Info</h2>
      <FormikInput formik={formik} name="color" label="Favourite Color" type="select" loading={isLoading}>
        <>
          <option value="" label="Select a color">
            Select a color
          </option>
          {colors.map(color => (
            <option value={color} label={color} key={color}>
              {color}
            </option>
          ))}
        </>
      </FormikInput>
      <FormikInput formik={formik} name="terms" label="I Agree with the Terms and Conditions" type="checkbox" />
      <Button onClick={handlePrevStep}>Back</Button>
      <Button style={{ marginLeft: '1rem' }} disabled={!(formik.isValid && formik.dirty)} onClick={handleNextStep}>Next</Button>
    </div>
  )
}

export default MoreInfo;
