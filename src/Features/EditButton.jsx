/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import CgpaContext from "../contexts/CgpaContext";
import Button from "../component/Button";
import {  useContext } from "react";
import { FaPencil } from "react-icons/fa6";

const EditButton = ({ index, onEdit }) => {
  const { submittedValues, setFormValues, setEditingIndex } =
    useContext(CgpaContext);
  const handleEdit = (index) => {
    setFormValues(submittedValues[index]);
    setEditingIndex(index);
  };
  return (
    <Button
      props="Edit"
      icon={<FaPencil className="mx-2"/>}
      onClick={() => handleEdit(index)}
      className="text-xs px-2 py-2 w-20 h-5 bg-white text-black rounded-sm border-none font-medium hover:bg-yellow-400 hover:text-white"
    >
      Edit
    </Button>
  );
};

export default EditButton;
