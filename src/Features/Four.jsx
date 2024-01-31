import { useContext } from 'react';
import Button from "../component/Button";
import CgpaContext from '../contexts/CgpaContext';

const CalculateCGPA = () => {
    const { submittedValues, setCalculatedCgpa, setScale } = useContext(CgpaContext);

    const gradeMapping = {
      "A": 4,
      "B": 3,
      "C": 2,
      "D": 1,
      "E": 0,
      "F": 0,
    };
    
    const handleCalculate = () => {
      let totalCreditHours = 0;
      let totalGradePoints = 0;
    
      submittedValues.forEach(value => {
        const gradePoint = gradeMapping[value.grade];
        totalCreditHours += parseFloat(value.credit);
        totalGradePoints += gradePoint * parseFloat(value.credit);
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
        props='CGPA 4.0'
        onClick={ () =>{
            setScale('4.0');
            handleCalculate();
        }
        }
        className=" text-2xl px-5 w-30 h-12 bg-green-500 text-white rounded-lg border-none font-medium hover:bg-black hover:text-white"
      />
    </div>
  );
};

export default CalculateCGPA;