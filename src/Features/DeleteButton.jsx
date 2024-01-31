/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Button from "../component/Button";
import { useContext } from "react";
import CgpaContext from "../contexts/CgpaContext";
import { FaTrash } from "react-icons/fa6";
const DeleteButton = ({ index, onDelete }) => {
  const { submittedValues, setSubmittedValues, setCalculatedCgpa, scale } =
    useContext(CgpaContext);
  const handleDelete = (index) => {
    const gradeMapping4 = {
      A: 4,
      B: 3,
      C: 2,
      D: 1,
      E: 0,
      F: 0,
    };

    const gradeMapping5 = {
      A: 5,
      B: 4,
      C: 3,
      D: 2,
      E: 1,
      F: 0,
    };
    const newValues = [...submittedValues];
    newValues.splice(index, 1);
    setSubmittedValues(newValues);

    // Recalculate CGPA
    let totalCreditHours = 0;
    let totalGradePoints = 0;

    newValues.forEach((value) => {
      const gradeMapping = scale === "4.0" ? gradeMapping4 : gradeMapping5;
      const gradePoint = gradeMapping[value.grade];
      totalCreditHours += parseFloat(value.credit);
      totalGradePoints += gradePoint * parseFloat(value.credit);
    });

    if (totalCreditHours !== 0) {
      setCalculatedCgpa(totalGradePoints / totalCreditHours);
    } else {
      setCalculatedCgpa(null); // Set to null if no values are left
    }
  };
  return (
    <Button
      props="Delete"
      icon={<FaTrash className="mx-2" />}
      onClick={handleDelete}
      className="text-xs px-1 py-1 w-20 h-5 bg-white text-black rounded-sm border-none font-medium hover:bg-red-500 hover:text-white"
    />
  );
};

export default DeleteButton;
