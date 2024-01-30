// SaveButton.jsx
import React, { useContext } from 'react';
import CgpaContext from "../contexts/CgpaContext";
import Button from '../component/Button';

const SaveButton = () => {
  const { setEditingIndex } = useContext(CgpaContext);

  return (
    <Button
        props='save'
        onClick={() => setEditingIndex(null)}
        className="text-xs px-1 py-1 w-10 h-5 bg-purple-500 text-white rounded-sm border-none font-medium hover:bg-black hover:text-white"
    />
    );
}

export default SaveButton;