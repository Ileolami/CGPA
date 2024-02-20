import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const token = localStorage.getItem('CGPASecret');
        // Make a GET request to your /loginstudent endpoint
        const response = await fetch('http://localhost:3001/loginstudent', {
          headers: {
            'authorization': token
          }
        });
        console.log(response);
        if (!response.ok) {
          throw new Error('Failed to fetch student data');
        }

        const data = await response.json();
        console.log(data);
        setStudent(data.student);
      } catch (error) {
        console.log(error);
      }
    };

    fetchStudentData();
  }, []);

  return (
    <AuthContext.Provider value={{ student }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;