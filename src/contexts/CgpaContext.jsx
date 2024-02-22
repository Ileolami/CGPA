import { useState, createContext, useEffect } from 'react';

export const CgpaContext = createContext();

export const CgpaProvider = ({ children }) => {
  const [formValues, setFormValues] = useState({ title: '', credit: '', grade: '', gradePoint: '', });
  const [submittedValues, setSubmittedValues] = useState([]);
  const [calculatedCgpa, setCalculatedCgpa] = useState(null);
  const [scale, setScale] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const [resultClass, setResultClass] = useState('');

  useEffect(() => {
    let result;
    if (scale === "4.0") {
      result = calculatedCgpa >= 3.5 ? 'first class' : calculatedCgpa >= 3.0 ? 'second class upper' : calculatedCgpa >= 2.0 ? 'second class lower' : calculatedCgpa >= 1.5 ? 'third class' : 'pass';
    } else {
      result = calculatedCgpa >= 4.5 ? 'first class' : calculatedCgpa >= 3.5 ? 'second class upper' : calculatedCgpa >= 2.5 ? 'second class lower' : calculatedCgpa >= 1.5 ? 'third class' : 'pass';
    }
    setResultClass(result);
  }, [calculatedCgpa, scale]);

  return (
    <CgpaContext.Provider value={{ formValues, setFormValues, submittedValues, setSubmittedValues, calculatedCgpa, setCalculatedCgpa, scale, setScale,editingIndex, setEditingIndex, resultClass, setResultClass }}>
      {children}
    </CgpaContext.Provider>
  );
};

export default CgpaContext;