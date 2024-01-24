import React, { useContext } from 'react';
import CgpaContext from '../contexts/CgpaContext';

const Display = () => {
  const { submittedValues } = useContext(CgpaContext);

  return (
    <div>
      {submittedValues && (
        <>
          <p>{submittedValues.title}</p>
          <p>{submittedValues.credit}</p>
          <p>{submittedValues.grade}</p>
        </>
      )}
    </div>
  );
};

export default Display;