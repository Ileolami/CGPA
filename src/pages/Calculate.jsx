// Calculate.jsx

import { useContext } from 'react';
import Input from '../Features/Input';
import Display from '../Features/Display';
import axios from 'axios';
import CgpaContext from '../contexts/CgpaContext';
import Button from '../component/Button';
import { toast } from 'react-hot-toast';

const Calculate = () => {
    const { submittedValues, scale } = useContext(CgpaContext);
    // console.log(localStorage.getItem('CGPASecret'));
    // Function to save user data and calculate CGPA
    const saveUserDataAndCalculateCgpa = async () => {
        try {
            // Make a POST request to the server to save user data and calculate CGPA
            const response = await axios.post('http://localhost:3001/calculate', { submittedValues, scale }, { headers: { Authorization: `Bearer ${localStorage.getItem('CGPASecret')}` } });
            console.log('User data saved successfully');
            console.log('Calculated CGPA:', response.data.cgpa);
            // You can update the context or handle the CGPA data as needed
        } catch (err) {
            console.error(err);
            toast.error(err.message, {
                icon: "🔔",
                style: {
                    border: "none",
                    padding: "15px",
                    color: "green",
                    fontSize: "15px",
                },
            });
        }
    };

    return (
        <div className='bckg'>
            <Input />
            <Display />
            <div className='flex justify-center items-center m-6'>
            <Button 
            onClick={saveUserDataAndCalculateCgpa}
            props="Save"
            className="bg-green-500 bg-opacity-10 hover:bg-black text-white font-bold py-2 px-4 rounded-lg"
            />
            </div>
        </div>
    );
};

export default Calculate;
