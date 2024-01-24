import CgpaContext from '../contexts/CgpaContext';
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
    event.preventDefault();
    const updatedFormValues = { ...formValues, 
        grade: gradeMapping[formValues.grade.toUpperCase()],
        gradeCreditProduct: gradeMapping[formValues.grade.toUpperCase()] * formValues.credit
    };
    setSubmittedValues(prevValues => [...prevValues, updatedFormValues]);
    setFormValues({ title: '', credit: '', grade: '' }); 
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Course Title</label>
          <input
            type="text"
            id="title"
            placeholder="CHM 111"
            value={formValues.title}
            onChange={(e) =>
              setFormValues({ ...formValues, title: e.target.value.toLocaleUpperCase() })
            }
          />
        </div>
        <div>
          <label htmlFor="credit">Course unit</label>
          <input
            type="number"
            id="credit"
            placeholder="3"
            value={formValues.credit}
            onChange={(e) =>
              setFormValues({ ...formValues, credit: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="grade">Grade</label>
          <input
            type="text"
            id="grade"
            placeholder="A"
            value={formValues.grade}
            onChange={(e) =>
                setFormValues({ ...formValues, grade: e.target.value })
            }
          />
        </div>
        <div>
            <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default Details;