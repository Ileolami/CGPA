import { useContext, useState } from 'react';
import Button from "../component/Button";
import CgpaContext from '../contexts/CgpaContext';

const CalculateCGPA = () => {
    const { submittedValues, setCalculatedCgpa } = useContext(CgpaContext);
  
    const handleCalculate = () => {
      let totalCreditHours = 0;
      let totalGradePoints = 0;
  
      submittedValues.forEach(value => {
        totalCreditHours += parseFloat(value.credit);
        totalGradePoints += parseFloat(value.gradeCreditProduct) ;
      });
  
      if (totalCreditHours !== 0) {
        setCalculatedCgpa(totalGradePoints / totalCreditHours);
      } else {
        console.log('Total credit hours is zero');
      }
    };
  
    return (
      <div>
        <Button
          props='Calculate'
          onClick={handleCalculate}
          className=" text-2xl px-1 py-1 w-30 h-12 bg-green-500 text-white rounded-lg border-none font-medium hover:bg-black hover:text-white"
        />
      </div>
    );
  };
  
  export default CalculateCGPA;