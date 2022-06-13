import React from 'react';
import { useOutletContext } from 'react-router';
import Button from '../../components/button';

const Error = () => {
  const { resetForm } = useOutletContext();

  return (
    <div>
      <h2>Error</h2>
      <p>
        Uh oh, something went wrong!
      </p>
      <p>
        Please try again later.
      </p>
      <Button onClick={resetForm}>Reset</Button>
    </div>
  )
}

export default Error;
