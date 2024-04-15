
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../Features/Input';
import Display from '../Features/Display';
import axios from 'axios';
import CgpaContext from '../contexts/CgpaContext';
import Button from '../component/Button';
import { toast } from 'react-hot-toast';
import Logout from './Logout';

const Calculate = () => {
    const { submittedValues, scale, calculatedCgpa, resultClass  } = useContext(CgpaContext);
    const navigate = useNavigate();
    const token = localStorage.getItem('CGPASecret'); 
  
    useEffect(() => {
      if (!token) {
        navigate('/login');
      }
    }, [token, navigate]);

    const saveUserDataAndCalculateCgpa = async () => {
        try {
            // Make a POST request to the server to save user data and calculate CGPA
            const response = await axios.post('https://cgpa-jmok.onrender.com/calculate', { submittedValues, scale }, 
            { headers: { Authorization: `Bearer ${localStorage.getItem('CGPASecret')}` } });
            toast.success("Saved successfully", {
                icon: "🔔",
                style: {
                    border: "none",
                    padding: "15px",
                    color: "green",
                    fontSize: "15px",
                },
            });
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

 
    const speakResult = () => {
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(`Your CGPA is ${calculatedCgpa.toFixed(2)} which is ${resultClass}`);
      synth.speak(utterance);
    };

    return (
        <div className='bckg'>
            <Input />
            <Display student/>
            <div className='flex justify-center items-center m-6 gap-7'>
            <Button 
            onClick={saveUserDataAndCalculateCgpa}
            props="Save"
            className="bg-green-500 bg-opacity-10 hover:bg-black text-white font-bold py-2 px-4 rounded-lg"
            />
            <Button
            props={'Listen'}
            className="bg-green-500 bg-opacity-10 hover:bg-black text-white font-bold py-2 px-4 rounded-lg"
            onClick={speakResult}
            />
            <Button
            props={'Print'}
            className="bg-green-500 bg-opacity-10 hover:bg-black text-white font-bold py-2 px-4 rounded-lg"
            onClick={() => window.print()}
            />
            <Logout />
            </div>
            
        </div>
    );
};

export default Calculate;
