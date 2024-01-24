import { useContext } from 'react';
import CgpaContext from '../contexts/CgpaContext';
const Display = () => {
  const { submittedValues } = useContext(CgpaContext);

  return (
    <div>
      {submittedValues && (
        <>
          <table>
            <thead>
              <tr>
                <th>Course Title</th>
                <th>Course Unit</th>
                <th>Grade</th>
                <th>GC</th>
              </tr>
            </thead>
            <tbody>
               {submittedValues.map((value, index) => (
                <tr key={index}>
                 <td>{value.title}</td>
                 <td>{value.credit}</td>
                 <td>{value.grade}</td>
                 <td>{value.gradeCreditProduct}</td>
                 </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default Display;