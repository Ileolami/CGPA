import CgpaContext from '../contexts/CgpaContext';
import { toast } from 'react-hot-toast'
import Button from './Button'
import { useContext } from 'react';
const Details = () => {
  const { formValues, setFormValues, setSubmittedValues } = useContext(CgpaContext);
  const gradeMapping = {
      "A": 5,
      "B": 4,
      "C": 3,
      "D": 2,
      "E": 1,
      "F": 0,
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
  
    // Show a success toast
    toast.success('Form submitted successfully', {
      icon: '👌',
      style: {
        border: 'none',
        padding: '5px',
        color: '#FFDD00 ',
        backgroundColor: '#713200',
      },
    });
  };
  return (
    <main className=' flex items-center justify-center my-14'>
    <div >
      <form>
        <div className='flex text-white mx-20 my-5 gap-5 lg:gap-20 lg:text-black' >
          <label htmlFor="title">Course Title</label>
          <label htmlFor="credit">Course unit</label>
          <label htmlFor="grade">Grade</label>
        </div>
        <div className='flex mx-20 my-5 gap-10 lg:gap-20 '>
          <input
           className='w-20 lg:w-28 p-3 rounded-xl' 
            type="text"
            id="title"
            placeholder="CHM 111"
            value={formValues.title}
            onChange={(e) =>
              setFormValues({ ...formValues, title: e.target.value.toLocaleUpperCase() })
            }
          />
          <input
          className='w-20 lg:w-28 p-3 rounded-xl' 
            type="number"
            id="credit"
            placeholder="3"
            value={formValues.credit}
            onChange={(e) =>
              setFormValues({ ...formValues, credit: e.target.value })
            }
          />
          <input
          className='w-20 lg:w-28 p-3 rounded-xl' 
            type="text"
            id="grade"
            placeholder="A"
            value={formValues.grade}
            onChange={(e) =>
                setFormValues({ ...formValues, grade: e.target.value })
            }
          />
        </div>
      </form>
        <div className='flex justify-center items-center'>
            <Button props='Add'
            onClick={handleSubmit}
            />
            <Button props='Edit'/>
            <Button props='Calculate'/>
        </div>
    </div>
    </main>
  );
};

export default Details;