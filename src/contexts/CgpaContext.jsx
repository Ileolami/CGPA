import React, { useState, createContext } from 'react';

export const CgpaContext = createContext();

export const CgpaProvider = ({ children }) => {
  const [formValues, setFormValues] = useState({
    title: '',
    credit: '',
    grade: '',
  });
  const [submittedValues, setSubmittedValues] = useState(null);

  return (
    <CgpaContext.Provider value={{ formValues, setFormValues, submittedValues, setSubmittedValues }}>
      {children}
    </CgpaContext.Provider>
  );
};
export default CgpaContext;