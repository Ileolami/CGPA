import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { CgpaContext } from '../contexts/CgpaContext';
import Button from '../component/Button';

const AddButton =() => {
        const { formValues, setFormValues, setSubmittedValues } = useContext(CgpaContext);
        const gradeMapping ={
          A: 5,
          B: 4,
          C: 3,
          D: 2,
          E: 1,
          F: 0,
        }
        const handleSubmit = (event) => {
       
          // Prevent the default form submission behavior
          event.preventDefault();
        
          // Check if all fields are filled
          if (!formValues.title || !formValues.credit || !formValues.grade) {
            // If any field is empty, show an error toast and return early
            toast.error('All Field Required', {
              icon: '🔔',
              style: {
                border: 'none',
                padding: '5px',
                color: '#FFDD00',
                backgroundColor: '#713200',
              },
            });
            return;
          }
        
          // Convert the grade to uppercase
          const grade = formValues.grade.toUpperCase();
        
          // Check if the grade is valid
          if (!gradeMapping.hasOwnProperty(grade)) {
            // If the grade is not valid, show an error toast and return early
            toast.error('Invalid grade', {
              icon: '🔔',
              style: {
                border: 'none',
                padding: '5px',
                color: '#FFDD00',
                backgroundColor: '#713200',
              },
            });
            return;
          }
        
          // Calculate the grade point
          const gradePoint = gradeMapping[grade];
        
          // Update the form values with the grade, grade point, and grade credit product
          const updatedFormValues = { 
            ...formValues, 
            grade,
            gradePoint,
            gradeCreditProduct: gradePoint * formValues.credit
          };
        
          // Add the updated form values to the submitted values
          setSubmittedValues(prevValues => [...prevValues, updatedFormValues]);
        
          // Reset the form values
          setFormValues({ title: '', credit: '', grade: '', gradePoint: '' }); 
        };
        return (
           <Button props='Add' 
           onClick={handleSubmit}
           className='bg-slate-500 w-20 px-5 lg:w-20 lg:px-4 h-12 m-5 rounded-xl text-2xl hover:bg-slate-400'
           />
    );
};

export default AddButton;

