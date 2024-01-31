import { useContext } from 'react';
import Button from "../component/Button";
import CgpaContext from '../contexts/CgpaContext';

const CalculateCGPA = () => {
    const { submittedValues, setCalculatedCgpa,setScale } = useContext(CgpaContext);
  
    const handleCalculate = () => {
      let totalCreditHours = 0;
      let totalGradePoints = 0;
  
      submittedValues.forEach(value => {
        totalCreditHours += parseFloat(value.credit);
        totalGradePoints += parseFloat(value.gradeCreditProduct) ;
      });
      setCalculatedCgpa(totalGradePoints / totalCreditHours);
    };
  
    return (
      <div>
        <Button
          props='CGPA 5.0'
          onClick={ () =>{
              setScale('5.0');
              handleCalculate();
          }}
          className=" text-2xl px-5 w-30 h-12 bg-green-500 text-white rounded-lg border-none font-medium hover:bg-black hover:text-white"
        />
      </div>
    );
  };
  
  export default CalculateCGPA;