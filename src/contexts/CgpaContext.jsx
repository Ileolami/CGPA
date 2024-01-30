import { useState, createContext } from 'react';
export const CgpaContext = createContext();

export const CgpaProvider = ({ children }) => {
  const [formValues, setFormValues] = useState({
    title: '',
    credit: '',
    grade: '',
    gradePoint: '',
  });
  const [submittedValues, setSubmittedValues] = useState([]);
  const [calculatedCgpa, setCalculatedCgpa] = useState(null);

  return (
    <CgpaContext.Provider value={{ formValues, setFormValues, submittedValues, setSubmittedValues, calculatedCgpa, setCalculatedCgpa }}>
      {children}
    </CgpaContext.Provider>
  );
};

export default CgpaContext;