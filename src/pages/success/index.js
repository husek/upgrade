import React from 'react';
import { useOutletContext } from 'react-router';
import Button from '../../components/button';

const Success = () => {
  const { resetForm } = useOutletContext();

  return (
    <div>
      <h2>Success!</h2>
      <p>
        You should receive a confirmation email soon.
      </p>
      <Button onClick={resetForm}>Reset</Button>
    </div>
  )
}

export default Success;
