import { useContext } from 'react';
import DeleteButton from '../Features/DeleteButton';
import CgpaContext from '../contexts/CgpaContext';
const Display = () => {
  const { submittedValues, setSubmittedValues, calculatedCgpa} = useContext(CgpaContext);
  const handleDelete = (index) => {
    setSubmittedValues(prevValues => prevValues.filter((item, i) => i !== index));
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
            {submittedValues.map((value, index) => (
              <tr key={index} >
                <td style={{  padding: '5px',textAlign:'center' }}>{value.title}</td>
                <td style={{  padding: '5px', textAlign:'center' }}>{value.credit}</td>
                <td style={{  padding: '5px', textAlign:'center' }}>{value.grade}</td>
                <td style={{  padding: '5px',  textAlign:'center'}}>{value.gradePoint}</td>
                <td style={{  padding: '5px', textAlign:'center' }}>{value.gradeCreditProduct}</td>
                <td style={{ padding: '5px', textAlign: 'center' }}>
                <DeleteButton index={index} onDelete={handleDelete}/>
                </td>
              </tr>
            ))}
            <tr>
                <td colSpan="5" style={{ padding: '5px', textAlign: 'center' }}>
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