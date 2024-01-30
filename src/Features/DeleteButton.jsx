import Button from "../component/Button";
import { useContext } from "react";
import CgpaContext from "../contexts/CgpaContext";
    const DeleteButton = ({ index, onDelete }) => {
        const { submittedValues, setSubmittedValues, setCalculatedCgpa } = useContext(CgpaContext);
        const handleDelete = (index) => {
            const newValues = [...submittedValues];
            newValues.splice(index, 1);
            setSubmittedValues(newValues);
          
            // Recalculate CGPA
            let totalCreditHours = 0;
            let totalGradePoints = 0;
          
            newValues.forEach(value => {
              totalCreditHours += parseFloat(value.credit);
              totalGradePoints += parseFloat(value.gradeCreditProduct) ;
            });
          
            if (totalCreditHours !== 0) {
              setCalculatedCgpa(totalGradePoints / totalCreditHours);
            } else {
              setCalculatedCgpa(null); // Set to null if no values are left
            }
          };
    return(
        <Button 
        props='delete' 
        onClick={handleDelete}
        className="text-xs px-1 py-1 w-10 h-5 bg-red-500 text-white rounded-sm border-none font-medium hover:bg-black hover:text-white"
        />

    )
};

export default DeleteButton;