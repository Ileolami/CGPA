import { useContext } from 'react';
import DeleteButton from '../Features/DeleteButton';
import CgpaContext from '../contexts/CgpaContext';
const Display = () => {
  const { submittedValues, scale, setSubmittedValues, calculatedCgpa} = useContext(CgpaContext);
  const handleDelete = (index) => {
    setSubmittedValues(prevValues => prevValues.filter((item, i) => i !== index));
  };
  const gradeMapping4 = {
    "A": 4,
    "B": 3,
    "C": 2,
    "D": 1,
    "E": 0,
    "F": 0,
  };
  
  const gradeMapping5 = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2,
    "E": 1,
    "F": 0,
  };
  return (
    <div className='flex item-center justify-center '>
    {submittedValues && (
      <>
        <table style={{ width: '60%', borderCollapse: 'collapse', borderRadius:'10px'}}>
          <thead>
            <tr style={{ backgroundColor: '#ddd' }}>
              <th style={{  padding: '5px',textAlign:'center' }}>Title</th>
              <th style={{  padding: '5px', textAlign:'center' }}>Unit</th>
              <th style={{  padding: '5px', textAlign:'center' }}>Grade</th>
              <th style={{  padding: '5px', textAlign:'center' }}>Point</th>
              <th style={{  padding: '5px', textAlign:'center' }}>GC</th>
            </tr>
          </thead>
          <tbody>
          {submittedValues.map((value, index) => {
        const gradeMapping = scale === '4.0' ? gradeMapping4 : gradeMapping5;
        const gradePoint = gradeMapping[value.grade];
        const gradeCreditProduct = gradePoint * parseFloat(value.credit);

              return (
                <tr key={index}>
                  <td style={{ padding: '5px', textAlign: 'center' }}>{value.title}</td>
                  <td style={{ padding: '5px', textAlign: 'center' }}>{value.credit}</td>
                  <td style={{ padding: '5px', textAlign: 'center' }}>{value.grade}</td>
                  <td style={{ padding: '5px', textAlign: 'center' }}>{gradePoint}</td>
                  <td style={{ padding: '5px', textAlign: 'center' }}>{gradeCreditProduct}</td>
                  <td style={{ padding: '5px', textAlign: 'center' }}>
                    <DeleteButton index={index} onDelete={handleDelete}/>
                  </td>
                </tr>
              );
            })}
            <tr>
                <td colSpan="5" style={{ padding: '5px', textAlign: 'center', color:"black", fontWeight:'bolder',  }}>
                  {calculatedCgpa && `Your CGPA is: ${calculatedCgpa.toFixed(2)}`}
                </td>
              </tr>
          </tbody>
        </table>
      </>
    )}
    </div>
); }
export default Display;