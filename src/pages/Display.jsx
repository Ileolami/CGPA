import { useContext } from 'react';
import CgpaContext from '../contexts/CgpaContext';
const Display = () => {
  const { submittedValues } = useContext(CgpaContext);

  return (
    <div className='flex item-center justify-center '>
    {submittedValues && (
      <>
        <table style={{ width: '60%', borderCollapse: 'collapse', borderRadius:'10px'}}>
          <thead>
            <tr style={{ backgroundColor: '#ddd' }}>
              <th style={{  padding: '8px',textAlign:'center' }}>Title</th>
              <th style={{  padding: '8px', textAlign:'center' }}>Unit</th>
              <th style={{  padding: '8px', textAlign:'center' }}>Grade</th>
              <th style={{  padding: '8px', textAlign:'center' }}>Point</th>
              <th style={{  padding: '8px', textAlign:'center' }}>GC</th>
            </tr>
          </thead>
          <tbody>
            {submittedValues.map((value, index) => (
              <tr key={index} >
                <td style={{  padding: '8px',textAlign:'center' }}>{value.title}</td>
                <td style={{  padding: '8px', textAlign:'center' }}>{value.credit}</td>
                <td style={{  padding: '8px', textAlign:'center' }}>{value.grade}</td>
                <td style={{  padding: '8px',  textAlign:'center'}}>{value.gradePoint}</td>
                <td style={{  padding: '8px', textAlign:'center' }}>{value.gradeCreditProduct}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    )}
    </div>
); }
export default Display;