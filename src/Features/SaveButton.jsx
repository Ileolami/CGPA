// SaveButton.jsx
import { useContext } from "react";
import CgpaContext from "../contexts/CgpaContext";
import Button from "../component/Button";
import { FaDownload } from "react-icons/fa6";

const SaveButton = () => {
  const { setEditingIndex } = useContext(CgpaContext);

  return (
    <Button
      props="Save"
      icon={<FaDownload className="mx-2" />}
      onClick={() => setEditingIndex(null)}
      className="text-xs px-1 py-1 w-20 h-5 bg-white text-black rounded-sm border-none font-medium hover:bg-green-500 hover:text-white"
    />
  );
};

export default SaveButton;
