import React from 'react';
import { useNavigate, useOutletContext } from 'react-router';
import Button from '../../components/button';

const MoreInfo = () => {
  const navigate = useNavigate();
  const { formik, previousStep } = useOutletContext();

  const handlePrevStep = () => {
    previousStep();
    navigate('/more-info');
  }

  return (
    <div>
      <h2>Confirmation</h2>

      <ul>
        <li>
          <strong>First Name: </strong> <>{formik.values.name}</>
        </li>

        <li>
          <strong>Email: </strong> {formik.values.email}
        </li>
        <li>
          <strong>Password: </strong> *****
        </li>
        <li>
          <strong>Favorite Colour: </strong> <span>{formik.values.color}</span>
        </li>

        <li>
          <strong>Terms and Conditions: </strong> <span>{formik.values.terms ? 'Agreed' : 'Disagreed'}</span>
        </li>
      </ul>
      <Button onClick={handlePrevStep}>Back</Button>
      <Button style={{ marginLeft: '1rem' }} disabled={!(formik.isValid && formik.dirty)} type="submit">Submit</Button>
    </div>
  )
}

export default MoreInfo;
