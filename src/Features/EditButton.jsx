import CgpaContext from "../contexts/CgpaContext";
import Button from "../component/Button";
import { useContext } from "react";

const EditButton = ({ index, onEdit }) => {
    const { submittedValues, setFormValues, setEditingIndex } = useContext(CgpaContext);
    const handleEdit = (index) => {
        setFormValues(submittedValues[index]);
        setEditingIndex(index);
    };
    return (
        <Button
            props='edit'
            onClick={() => handleEdit(index)}
            className="text-xs px-1 py-1 w-10 h-5 bg-yellow-500 text-white rounded-sm border-none font-medium hover:bg-black hover:text-white"
        />
    );
}

export default EditButton;