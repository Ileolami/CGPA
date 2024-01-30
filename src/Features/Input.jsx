import CgpaContext from '../contexts/CgpaContext';
import { useContext } from 'react';
import AddButton from './AddButton'
import CalculateCGPA from './CalculateCGPA';

const Details = () => {
  const { formValues, setFormValues } = useContext(CgpaContext);
  
  return (
    <main className=' flex items-center justify-center mx-14'>
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
            <AddButton/>  
            <CalculateCGPA/>
        </div>
    </div>
    </main>
  );
};

export default Details;